const { src, dest } = require('gulp');

const clean = require('gulp-clean');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const babel = require('gulp-babel');
const serve = require('gulp-serve');

function cleanFiles() {
  return src('public/output/*', { read: false })
    .pipe(clean());
}

function Server() {
  return serve({
    root: 'public',
    port: 3000,
  })();
}

exports.default = function() {
  return src('src/*.js')
    .pipe(babel())
    .pipe(dest('public/output/'))
    .pipe(uglify())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(dest('public/output/'))
    ;
}

exports.clean = cleanFiles;
exports.serve = Server;
