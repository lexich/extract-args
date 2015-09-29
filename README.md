### About extract-args
Smart extract arguments from javascript function with default params and callback in the end 

[![Build Status](https://travis-ci.org/lexich/extract-args.svg)](https://travis-ci.org/lexich/extract-args)
[![NPM version](https://badge.fury.io/js/extract-args.svg)](http://badge.fury.io/js/extract-args)
[![Coverage Status](https://coveralls.io/repos/lexich/extract-args/badge.svg?branch=master&service=github)](https://coveralls.io/github/lexich/extract-args?branch=master)

```js
import extractArgs from "extract-args";
import _ from "lodash";

function test(...args) {
  const [a, b, cb] = extractArgs(args, [1, 2]);
  a === args[0] || 1; // true
  b === args[1] || 2; // true
  isFunction(cb); // true independ of args[2]
}
```
