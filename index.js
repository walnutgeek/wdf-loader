/*
 MIT License http://www.opensource.org/licenses/mit-license.php
 Author: @walnutgeek
 */
var DataFrame = require('wdf/DataFrame');
var u$ = require('wdf/utils');

function split_source(source) {
  return source.split("\n")
      .filter(u$.isStringNotEmpty)
      .map(JSON.parse);
}
function read_wdf_to_json_array(filename) {
  var fs = require('fs');
  var source = fs.readFileSync(filename).toString();
  return split_source(source);
}

require.extensions['.wdf'] = function(module,filename){
  var rows = read_wdf_to_json_array(filename);
  var config = rows.shift();
  module.exports = new DataFrame(rows,config);
  return module.exports;
};

module.exports = function(source) {
  this.cacheable && this.cacheable();
  var rows = split_source(source) ;
  var config = rows.shift();
  return "var DataFrame = require('wdf/DataFrame');\n" +
      "module.exports = new DataFrame(" +
      JSON.stringify(rows, undefined, "\t") +
      ",\n\t"+ JSON.stringify(config) +" );";
};