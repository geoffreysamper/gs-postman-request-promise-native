<a href="http://promisesaplus.com/">
    <img src="https://promises-aplus.github.io/promises-spec/assets/logo-small.png" align="right" alt="Promises/A+ logo" />
</a>

# gs-postman-Request-Promise-Native



# Deprecated!

As of Feb 11th 2020, [`request`](https://github.com/request/request) is fully deprecated. No new changes are expected to land. In fact, none have landed for some time. This package is also deprecated because it depends on `request`.

Fyi, here is the [reasoning of `request`'s deprecation](https://github.com/request/request/issues/3142) and a [list of alternative libraries](https://github.com/request/request/issues/3143).

---

This package is similar to [`request-promise-native`](https://www.npmjs.com/package/request-promise-native) but uses fork  [postman request js](https://github.com/postmanlabs/postman-reques) native ES6+ promises.


## Installation

This module is installed via npm:

```
npm install --save postman-request
npm install --save gs-postman-request-promise-native
```

`request` is defined as a peer-dependency and thus has to be installed separately.

## Contributing

To set up your development environment:

1. clone the repo to your desktop,
2. in the shell `cd` to the main folder,
3. hit `npm install`,
5. run `node ./node_modules/.bin/gulp dev` if you don't want to install gulp globally.)

`gulp dev` watches all source files and if you save some changes it will lint the code and execute all tests. The test coverage report can be viewed from `./coverage/lcov-report/index.html`.

If you want to debug a test you should use `gulp test-without-coverage` to run all tests without obscuring the code by the test coverage instrumentation.

## License (ISC)

In case you never heard about the [ISC license](http://en.wikipedia.org/wiki/ISC_license) it is functionally equivalent to the MIT license.

See the [LICENSE file](LICENSE) for details.
