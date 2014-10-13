GulpEste = require 'gulp-este'
gulp = require 'gulp'
rename = require 'gulp-rename'
wrap = require 'gulp-wrap'
yargs = require 'yargs'

este = new GulpEste __dirname, true, '../../../..'

paths =
  js: [
    'bower_components/closure-library/**/*.js'
    'bower_components/este-library/este/**/*.js'
    '{src,tmp}/**/*.js'
    '!**/*_test.js'
  ]

compile = (fileName, production = true) ->
  este.production = production
  este.compile paths.js, '.',
    fileName: fileName
    compilerPath: 'bower_components/closure-compiler/compiler.jar'
    compilerFlags: closure_entry_point: ['main']

gulp.task 'coffee', ->
  este.coffee [
    'bower_components/este-library/este/**/*.coffee'
    'src/**/*.coffee'
  ]

gulp.task 'deps', ['coffee'], ->
  este.deps paths.js

gulp.task 'compile-bower-min', ['deps'], ->
  compile 'dispatcher.min.js'

gulp.task 'compile-bower-dev', ['deps'], ->
  compile 'dispatcher.js', 'debug'

gulp.task 'build-nodejs', ['compile-bower-dev'], ->
  gulp.src 'dispatcher.js', base: '.'
    .pipe wrap '<%= contents %>module.exports = este.Dispatcher;'
    .pipe rename 'index.js'
    .pipe gulp.dest '.'

gulp.task 'default', ['compile-bower-min', 'compile-bower-dev', 'build-nodejs']

gulp.task 'bump', (done) ->
  este.bump './*.json', yargs, done
