const gulp = require('gulp');
const concat = require('gulp-concat');
const minifycss = require('gulp-minifycss');
const uglify = require('gulp-uglify');
const livereload = require('gulp-livereload');

const css = {
  source: 'src/stylesheets',
  target: 'public/stylesheets'
};

const js = {
  source: 'src/javacripts',
  target: 'public/javacripts'
};

gulp.task('css', () => {
  gulp.src([
    css.source + '/normaset.css',
    css.source + '/*.css'
  ])
  .pipe(concat('all.min.css'))
  .pipe(minifycss({ keepSpecialComments: false }))
  .pipe(gulp.dest(css.target))
  .pipe(livereload());
})

gulp.task('js', () => {
  gulp.src([
    js.source + '/*.js'
  ])
  .pipe(concat('all.min.js'))
  .pipe(uglify({ mangle: true }).on('error', console.error))
  .pipe(gulp.dest(js.target))
  .pipe(livereload());
})

gulp.task('watch', () => {
  livereload().listen();
  gulp.watch(css.source + '/*.css', ['css']);
  gulp.watch(js.source + '/*.js', ['js']);
})

gulp.task('default', ['css', 'js']);
