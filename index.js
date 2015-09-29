"use strict";

var isFunction = require("lodash/lang/isFunction");
var isArray = require("lodash/lang/isArray");
var isUndefined = require("lodash/lang/isUndefined");

function none() {}

function extractArgs(args, defaults) {
  var result = !isArray(defaults) ? [] : defaults.concat();
  if (isArray(args)) {
    /* eslint id-length:0 */
    for (var i = 0; i < args.length; i++) {
      !isUndefined(args[i]) && (result[i] = args[i]);
    }
  }
  if (!isFunction(result[result.length - 1])) {
    result[result.length] = none;
  }
  return result;
}

extractArgs.none = none;

module.exports = extractArgs;
