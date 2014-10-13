GulpEste = require 'gulp-este'
bump = require 'gulp-bump'
filter = require 'gulp-filter'
git = require 'gulp-git'
gulp = require 'gulp'
rename = require 'gulp-rename'
tagVersion = require 'gulp-tag-version'
wrap = require 'gulp-wrap'
yargs = require 'yargs'

args = yargs.argv
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
    .pipe wrap '<%= contents %>; module.exports = este.Dispatcher;'
    .pipe rename 'index.js'
    .pipe gulp.dest '.'

gulp.task 'default', ['compile-bower-min', 'compile-bower-dev', 'build-nodejs']

gulp.task 'bump', (done) ->
  gulp.src ['./package.json', './bower.json']
    .pipe bump type: args.version || 'patch'
    .pipe gulp.dest './'
    .pipe git.commit 'bumps package version'
    .pipe filter 'package.json'
    .pipe tagVersion()
