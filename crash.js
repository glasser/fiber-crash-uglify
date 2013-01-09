var Fiber = require('fibers');

Fiber(function() {
  var UglifyJS = require('uglify-js');
  UglifyJS.minify('sockjs-0.3.4.js');
  UglifyJS.minify('sockjs-0.3.4.js');
}).run();
