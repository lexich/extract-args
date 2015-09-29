"use strict";
/* global describe, it */
/* jshint expr: true */

var expect = require("chai").expect;
var extractArgs = require("./index.js");
/* eslint id-length:0 */
var _ = require("lodash");

describe("test", function() {
  it("check export", function() {
    expect(_.isFunction(extractArgs)).to.true;
  });

  it("null args + null defaults", function() {
    var res = extractArgs();
    expect(res).to.have.length(1);
    expect(_.isFunction(res[0])).to.be.true;
    expect(res[0]).to.eql(extractArgs.none);
  });

  it("null args + defaults []", function() {
    var res = extractArgs(null, []);
    expect(res).to.have.length(1);
    expect(_.isFunction(res[0])).to.be.true;
    expect(res[0]).to.eql(extractArgs.none);
  });

  it("null args + defaults [function]", function() {
    var defaults = [function() {}];
    var res = extractArgs(null, defaults);
    expect(res).to.have.length(1);
    expect(defaults !== res).to.be.true;
    expect(res).to.eql(defaults);

    var defaults2 = [1, function() {}];
    var res2 = extractArgs(null, defaults2);
    expect(res2).to.have.length(2);
    expect(res2 !== defaults2).to.be.true;
    expect(res2).to.eql(defaults2);
  });

  it("null args + defaults [1, 2, 3]", function() {
    var defaults = [1, 2, 3];
    var res = extractArgs(null, defaults);
    expect(res).to.have.length(4);
    expect(res.slice(0, 3)).to.eql(defaults);
    expect(res[3]).to.eql(extractArgs.none);
  });

  it("args without default", function() {
    var args = [1, 2, function() {}];
    var res = extractArgs(args);
    expect(res !== args).to.be.true;
    expect(res).to.eql(args);

    var args2 = [1, 2];
    var res2 = extractArgs(args2);
    expect(res2).to.have.length(3);
    expect(res2.slice(0, 2)).to.eql(args2);
    expect(res2[2]).to.eql(extractArgs.none);

    var args3 = [];
    var res3 = extractArgs(args3);
    expect(res3).to.have.length(1);
    expect(res3[0]).to.eql(extractArgs.none);
  });

  it("args (1, undefined, 3, func) with defaults ", function() {
    var args = [1, undefined, 3, function() {}];
    var defaults = [2, 2, 2];
    var res = extractArgs(args, defaults);
    expect(res).eql([1, 2, 3, args[3]]);
  });

  it("args (1, null, 3, func) with defaults ", function() {
    var args = [1, null, 3, function() {}];
    var defaults = [2, 2, 2];
    var res = extractArgs(args, defaults);
    expect(res).eql(args);
  });
});
