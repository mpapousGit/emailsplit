#! /usr/bin/env node

(function() {
  'use strict';
  var exec = require('child_process').exec;
  var async = require('async');
  var errors = false;
  var args = [].concat(process.argv);
  var program = args.splice(0, 1)[0];
  var directory = args.splice(0, 1)[0];
  var fileName = args.splice(0, 1)[0] || '';
  var className = '.'.concat(args.splice(0, 1)[0] || '');

  if (!fileName || className === '.') {
    console.log('\n  Usage: emailsplit <fileName> <className>\n');
  } else {
    var validate =  require('./src/validate');
    var clean = require('./src/clean');
    var splitter = require('./src/splitter');
    var renderer = require('./src/renderer');

    // validate.do(fileName, className);

    async.series([
      function(callback) {
        validate.checkFile(fileName);
        validate.checkClass(fileName, className, function() {});
        //callback(null, 1);
      }
    ]);
  }
})();


