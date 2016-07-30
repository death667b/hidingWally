var fs = require('fs');
var _ = require('lodash');
var LineInputStream = require('line-input-stream');
var Readable = require('stream').Readable;
var util = require('util');

var map = {
  email: null,
  firstName: null,
  lastName: null,
  fullName: null,
  customFields: {}
};

function processHeaders(line) {
  line.split(',').forEach(function(item, i) {
    switch (true) {
      case /email/i.test(item):
        if (map.email) break;
        map.email = i;
        //console.log('mapped email address to ' + i);
        break;

      case /first/i.test(item):
        if (map.firstName) break;
        map.firstName = i;
        //console.log('mapped firstname to ' + i);
        break;

      case /last/i.test(item):
        if (map.lastName) break;
        map.lastName = i;
        //console.log('mapped lastname to ' + i);
        break;

      case /name/i.test(item):
        if (map.fullName) break;
        map.fullName = i;
        //console.log('mapped fullname to ' + i);
        break;

      default:
        if (map.customFields[item]) break;
        map.customFields[item.trim().toLowerCase()] = i;
        //console.log('found custom field ' + item);
        break;
    }
  });

  //flip the custom fields so we can use them better
  map.customFields = _.invert(map.customFields);

  //we always need email address
  //if we have first and last thats ok, we don't need full
  //if we have fullname we don't need first and last
  return (map.email != null) && (((map.firstName != null) && (map.lastName != null)) || (map.fullName != null));
}

function processLine(line) {
  var row = {
    email: null,
    name: null,
    custom: {
      //map.customFields
    }
  };

  var items = line.split(',');

  //handle fullname first
  if (map.fullName != null) {
    row.name = items[map.fullName];
  }
  
  if ((map.firstName != null) && (map.lastName != null)) {
    row.custom['first_name'] = items[map.firstName];
    row.custom['last_name'] = items[map.lastName];

    if (row.name == null) {
      row.name = items[map.firstName] + ' ' + items[map.lastName];
    }
  }

  //TODO: validate this is a legit email address
  row.email = items[map.email];

  //for all the other lines
  items.forEach(function(item, i) {
    //skip over the ones we know
    if (_.includes(_.values(map), i)) return;
    if (map.customFields[i] == undefined) return; 
    row.custom[map.customFields[i]] = item;
  });

  return row;
}

module.exports = Importer;

function Importer(options) {
  //if (! (this instanceof Importer)) return new Importer(options);
  if (! options) options = {};
  options.objectMode = true;
  Readable.call(this, options);
}

util.inherits(Importer, Readable);

Importer.prototype._read = function (n) { };

Importer.prototype.stream = function(filepath) {
  var self = this;
  var stream = LineInputStream(fs.createReadStream(filepath, {flags:"r"}));
  stream.setDelimiter("\n");
  var counter = 0;
  var error = false;

  stream.on("error", function(err) {
    self.emit('error', err);
  });

  stream.on("line", function(line) {
    line = line.replace('\r', ''); // get rid of windows-style line endings
    if(!counter) {
      counter++;

      if(!processHeaders(line)) {
        self.emit('error', 'Error in headers: ' + line);
      }
      //print out the headers
      return;
    }

    counter++;
    if (error) return;
    var row = processLine(line);
    self.push(row);
  });

  stream.on("end", function() {
    self.emit('end');
  });

  return self;
};
