
var pzpr = require('../index.js');

var puzzle = new pzpr.Puzzle().open('mashu/3/3');

console.log(puzzle.toDataURL(null,null,19));