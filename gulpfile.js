var gulp = require('gulp');
var concat = require('gulp-concat');
var templateCache = require('gulp-angular-templatecache');
var connect = require('gulp-connect');
var gulpFilter = require('gulp-filter');
var bower = require('gulp-main-bower-files');
var minify = require('gulp-minify');
var ngAnnotate = require('gulp-ng-annotate');
var eslint = require('gulp-eslint');
var path = require('path');

var CSS_APP = [
  'src/**/*.css'
];

var JS_APP = [
  'src/**/*.js',
  '!src/**/*.test.js'
];

var VIEWS_APP = [
  'src/**/*.html'
];

/**
 *   The location of the resources for deploy
 */
var DESTINATION = 'dest/';

/**
 * The name of the angular module
 */
var MODULE_NAME = 'MyAngularJSStarter';

/**
 * The URL of the back-end API
 */
var API_URL = 'http://localhost:8888/api/data';

/**
 * Route to which the API calls will be mapped
 */
var API_ROUTE = '/api/data';

/**
 * Task for concatenation of the js libraries
 * declared in bower.json file
 */
gulp.task('bower-js', function () {
  var jsFilter = gulpFilter('**/*.js');
  return gulp.src('./bower.json')
    .pipe(bower())
    .pipe(jsFilter)
    .pipe(concat('lib.js'))
    .pipe(gulp.dest(DESTINATION));
});

/**
 * Task for concatenation of the css libraries
 * declared in bower.json file
 */
gulp.task('bower-css', function () {
  var cssFilter = gulpFilter('**/*.css');
  return gulp.src('./bower.json')
    .pipe(bower())
    .pipe(cssFilter)
    .pipe(concat('lib.css'))
    .pipe(gulp.dest(DESTINATION));
});

/**
 *  Task for bower install which collect all bower subtasks
 */
gulp.task('concat-bower-components', ['bower-js', 'bower-css'], function () {
});

/**
 * Task for concatenation of the js code defined
 * in this project
 */
gulp.task('concat_js_app', function () {
  return gulp.src(JS_APP)
    .pipe(concat('src.js'))
    .pipe(ngAnnotate({
      // true helps add where @ngInject is not used. It infers.
      // Doesn't work with resolve, so we must be explicit there
      add: true
    }))
    .pipe(minify())
    .pipe(gulp.dest(DESTINATION))
});

/**
 * Task for concatenation of the html templates defined
 * in this project
 */
gulp.task('templates', function () {
  return gulp.src(VIEWS_APP) // which html files
    .pipe(
    templateCache('templates.js', { // compile them as angular templates
      module: MODULE_NAME,        // from module MODULE_NAME
      root: 'src'                 // root of the app
    }))
    .pipe(gulp.dest(DESTINATION));
});

/**
 * Task for concatenation of the css code defined
 * in this project
 */
gulp.task('concat_css_app', function () {
  return gulp.src(CSS_APP)
    .pipe(concat('app.css'))
    .pipe(gulp.dest(DESTINATION))
});

gulp.task('lint', function () {
  // ESLint ignores files with "node_modules" paths.
  // So, it's best to have gulp ignore the directory as well.
  // Also, Be sure to return the stream from the task;
  // Otherwise, the task may end before the stream has finished.
  return gulp.src(['**/*.js', '!node_modules/**', '!bower_components/**'])
    // eslint() attaches the lint output to the "eslint" property
    // of the file object so it can be used by other modules.
    .pipe(eslint())
    // eslint.format() outputs the lint results to the console.
    // Alternatively use eslint.formatEach() (see Docs).
    .pipe(eslint.format())
    // To have the process exit with an error code (1) on
    // lint error, return the stream and pipe to failAfterError last.
    .pipe(eslint.failAfterError());
});


var tasks = [
  'concat-bower-components',
  'concat_js_app',
  'templates',
  'concat_css_app',
  'lint'
];

gulp.task('build', tasks, function () {
});

gulp.task('watch', function () {
  gulp.watch(JS_APP, ['concat_js_app']);
  gulp.watch(VIEWS_APP, ['templates']);
});

gulp.task('serve', function () {
  connect.server({
    port: 8000
  });
});

gulp.task('default', ['build', 'serve', 'watch']);
