# este.Dispatcher [![Build Status](https://secure.travis-ci.org/steida/este-dispatcher.png?branch=master)](http://travis-ci.org/steida/este-dispatcher) [![Dependency Status](https://david-dm.org/steida/este-dispatcher.png)](https://david-dm.org/steida/este-dispatcher) [![devDependency Status](https://david-dm.org/steida/este-dispatcher/dev-status.png)](https://david-dm.org/steida/este-dispatcher#info=devDependencies)

Facebook [Flux](https://github.com/facebook/flux) like dispatcher with [promises](https://promisesaplus.com/) support. Made with [Este.js](https://github.com/steida/este).

## Features

  - Promises moves dispatcher to next level. All app sync/async actions and errors can be orchestrated across all app layers.
  - Report app errors via provided `onError` hook.
  - It's isomorphic, choose Bower or Node.js version.
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
npm install gulp-git --save

## Usage

```html
  // Dev
  <script src="bower_components/este-dispatcher/dispatcher.js"></script>
  // Production
  <script src="bower_components/este-dispatcher/dispatcher.min.js"></script>
```



#### Install

```
  npm install este-dispatcher
```

#### Usage

```js
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
