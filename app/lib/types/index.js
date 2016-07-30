import path from 'path';
import fs from 'fs';

const types = {};

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf(".") !== 0) && (file !== "index.js") && (file !== 'Base.js');
  })
  .forEach(function(file) {
    const typeName = file.substring(0, file.length - 3);
    const Type = require(path.join(__dirname, file));
    types[typeName] = Type.default;
  });

export { types };