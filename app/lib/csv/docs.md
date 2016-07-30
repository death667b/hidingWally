## #CSV
A CSV class library's API documentation...

### #getColumnKeys
finds the keys of a CSV file and return an object with each columns types.

#### Input
```javascript
String Required, // pathname
```

#### Output
```javascript
[ // an object containg columns and their types
  { [columnName]: type String Required } Object Required,
] Array Required,
```

### #transformCSV
takes a CSV pathname and a transformer object which contain functions to manipulate the CSV data, and returns a new altered CSV's pathname.

#### Input
```javascript
String Required, // pathname of current CSV
{ // transformer object
  [columnName]: Function Required // transformer function
}, Object Required,
```

#### Output
```javascript
String Required // the new CSV's pathname
```

### #createTransformer
takes an array of transformer selector objects, and a list of column type classes, and creates a transformer object to apply to a CSV transformation.

#### Input
```javascript
[ // #transformSelectors
  {
    columnName: String Required,
    type: String Required,
    methodFilter: String Required,
  } Object Required,
] Array Required,

{ // #types
  [types]: { filter: Function Required } Class Required,
} Object Required,
```

#### Output
```javascript
// an object containing the columns transform functions
{ [columnName]: Function Required, } Object Required,
```
