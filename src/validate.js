(function() {
  'use strict';
  var fs = require('fs');
  var cheerio = require('cheerio');
  module.exports = {
     checkFile: function(file, className) {
      fs.readFile(file, function(err, file) {
        if (err) {
          console.log("File is not valid");
        } else {
          console.log("File is valid");
        }
      });
    },
    checkClass : function(fileName, className, callback) {
      fs.readFile(fileName, function(err, content) {
        if (!err) {
          return this.split(content, className, callback);
        }
      }.bind(this));
    },
    split: function(content, className) {
      var self = this;
      var $ = cheerio.load(content);
      if ($(className)) {
        console.log(""+ content );

      } else {
        console.log("not here");
      }
    }
  }
})();
