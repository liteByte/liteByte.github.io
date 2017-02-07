const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const gulpSequence = require('gulp-sequence');
const inject = require('gulp-inject');
const watch = require('gulp-watch');
const rev = require('gulp-rev');
const clean = require('gulp-clean');
const htmlmin = require('gulp-htmlmin');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');

const librariesJS = [];

const librariesCSS = [];


//****************************** JS ******************************

gulp.task('js', callback => {
  gulpSequence('build-vendor-js', 'minify-js')(callback);
});

gulp.task('build-vendor-js', () => {
  return gulp.src(librariesJS)
    .pipe(gulp.dest('./dist'));
});

gulp.task('minify-js', () => {
  return gulp.src(['./src/**/*.js'])
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(rev())
    .pipe(gulp.dest('./dist'))
    .pipe(rev.manifest())
    .pipe(gulp.dest('./dist'));
});

//****************************** CSS ******************************

gulp.task('css', (callback) => {
  gulpSequence('build-vendor-css', 'compile-sass', 'minify-css')(callback);
});

gulp.task('build-vendor-css', () => {
  return gulp.src(librariesCSS)
    .pipe(gulp.dest('./dist'));
});

gulp.task('compile-sass', () => {
  return gulp.src('./src/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src'));
});

gulp.task('minify-css', () => {
  return gulp.src('./src/**/*.css')
    .pipe(concat('main.css'))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(rev())
    .pipe(gulp.dest('./dist'))
    .pipe(rev.manifest())
    .pipe(gulp.dest('./dist'));
});

//****************************** HTML ******************************

gulp.task('html', callback => {
  gulpSequence('minify-html', 'inject')(callback);
});

gulp.task('minify-html', () => {
  return gulp.src(['./src/**/*.html'])
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./dist'));
});

gulp.task('inject', ['copy-index-html'], () => {
  const injected_files = [
    './dist/main-*.js',
    './dist/*.css'
  ];
  return gulp.src('./index.html')
    .pipe(inject(gulp.src(injected_files, {read: false}), {relative: true}))
    .pipe(gulp.dest('./'));
});

gulp.task('copy-index-html', () => {
  return gulp.src('./src/index.html')
    .pipe(gulp.dest('./'));
});

//****************************** Clean assets folder ******************************

gulp.task('clean-assets', () => {
  return gulp.src([
    './dist',
    './src/*.css'
  ], {read: false})
    .pipe(clean());
});

//****************************** Watchers ******************************

gulp.task('watch-files', () => {
  return gulp.watch(
    [
      './src/**/*.js',
      './src/**/*.scss',
      './src/**/*.html'
    ],
    () => {
      gulpSequence('clean-assets', ['js', 'css'], 'html')(function (err) {
        if (err) console.log(err)
      });
    });
});

//****************************** Run gulp task in develop environment ******************************

gulp.task('default', gulpSequence('clean-assets', ['js', 'css'], 'html', 'watch-files'));
