GulpEste = require 'gulp-este'
gulp = require 'gulp'
yargs = require 'yargs'

este = new GulpEste __dirname, true, '../../../..'

paths =
  coffee: [
    'bower_components/este-library/este/**/*.coffee'
    'src/**/*.coffee'
  ]
  js: [
    'bower_components/closure-library/**/*.js'
    'bower_components/este-library/este/**/*.js'
    '{src,tmp}/**/*.js'
    '!**/*_test.js'
  ]
  compiler: 'bower_components/closure-compiler/compiler.jar'

gulp.task 'coffee', ->
  este.coffee paths.coffee

gulp.task 'deps', ['coffee'], ->
  este.deps paths.js

gulp.task 'compile-min', ['deps'], ->
  compile 'dispatcher.min.js', true

gulp.task 'compile-debug', ['deps'], ->
  compile 'dispatcher.js', 'debug'

compile = (fileName, production) ->
  este.production = production
  este.compile paths.js, '.',
    fileName: fileName
    compilerPath: paths.compiler
    compilerFlags: closure_entry_point: ['main']

gulp.task 'default', ['compile-min', 'compile-debug']

gulp.task 'bump', (done) ->
  este.bump './*.json', yargs, done
