# este.Dispatcher [![Build Status](https://secure.travis-ci.org/steida/este-dispatcher.png?branch=master)](http://travis-ci.org/steida/este-dispatcher) [![Dependency Status](https://david-dm.org/steida/este-dispatcher.png)](https://david-dm.org/steida/este-dispatcher) [![devDependency Status](https://david-dm.org/steida/este-dispatcher/dev-status.png)](https://david-dm.org/steida/este-dispatcher#info=devDependencies)

Facebook [Flux](https://github.com/facebook/flux) like dispatcher with [promises](https://promisesaplus.com/) support. Made with [Este.js](https://github.com/steida/este).

## Features

  - Promises moves dispatcher to the next level. All app sync/async actions and errors can be orchestrated across all app layers easily.
  - App errors can be reported via provided `onError` hook.
  - Isomorphic, Bower and Node.js versions included.
  - Bower version for production is super small, only 2.7 kB (gzipped). Yes, [Closure Compiler](https://developers.google.com/closure/compiler/).

## Install

For [Bower](http://bower.io/).

```
  bower install steida/este-dispatcher --save
```

For [Node.js](http://nodejs.org/).

```
  npm install este-dispatcher --save
```

## Usage

For [Bower](http://bower.io/).

```html
  // Dev
  <script src="bower_components/este-dispatcher/dispatcher.js"></script>
  // Production
  <script src="bower_components/este-dispatcher/dispatcher.min.js"></script>
```

For [Node.js](http://nodejs.org/).

```js
  var Dispatcher = require('este-dispatcher');
```

## API

Check [tests](https://github.com/steida/este-library/blob/master/este/dispatcher/dispatcher_test.coffee) or [source](https://github.com/steida/este-library/blob/master/este/dispatcher/dispatcher.coffee).

#### register

```js
/**
  @param {Function} callback
  @return {number} ID of registered callback.
*/
register(callback)
```

#### unregister

```js
/**
  @param {number} id ID of registered callback.
*/
unregister(id)
```

#### onError

```js
/**
  For error reporting.
  @param {string} action
  @param {*} reason
*/
onError(action, reason) 
```

#### dispatch

```js
/**
  @param {string} action
  @param {Object=} payload Data for action.
  @return {!goog.Promise}
*/
dispatch(action, payload)
```

#### waitFor

```js
/**
  @param {Array.<number>} ids Callbacks IDs.
  @return {!goog.Promise}
*/
waitFor(ids)
```

