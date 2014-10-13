# este.Dispatcher [![Build Status](https://secure.travis-ci.org/steida/este-dispatcher.png?branch=master)](http://travis-ci.org/steida/este-dispatcher) [![Dependency Status](https://david-dm.org/steida/este-dispatcher.png)](https://david-dm.org/steida/este-dispatcher) [![devDependency Status](https://david-dm.org/steida/este-dispatcher/dev-status.png)](https://david-dm.org/steida/este-dispatcher#info=devDependencies)

Facebook [Flux](https://github.com/facebook/flux) like dispatcher with [promises](https://promisesaplus.com/) support. Made with [Este.js](https://github.com/steida/este).

#### Features

  - catch and handle all sync/async actions
  - provide `onError` hook for errors reporting
  - isomorphic, Bower and Node.js versions
  - Bower for production has only 2.7 kB (gzipped)

## [Bower](http://bower.io/)

### Install

```
  bower install https://github.com/steida/este-dispatcher.git
```

### Usage

```
  // Dev
  <script src="bower_components/este-dispatcher/dispatcher.js"></script>
  // Production
  <script src="bower_components/este-dispatcher/dispatcher.min.js"></script>
```

## [Node.js](http://nodejs.org/)

### Install

```
  npm install este-dispatcher
```

### Usage

```
  var Dispatcher = require('este-dispatcher');
```

## API

Check [tests](https://github.com/steida/este-library/blob/master/este/dispatcher/dispatcher_test.coffee) or [source](https://github.com/steida/este-library/blob/master/este/dispatcher/dispatcher.coffee).

## Build

```
  npm install
  bower install
  gulp
```
