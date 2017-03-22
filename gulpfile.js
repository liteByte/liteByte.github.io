const fs            = require('fs');

const gulp          = require('gulp');
const concat        = require('gulp-concat');
const uglify        = require('gulp-uglify');
const gulpSequence  = require('gulp-sequence');
const inject        = require('gulp-inject');
const watch         = require('gulp-watch');
const rev           = require('gulp-rev');
const clean         = require('gulp-clean');
const htmlmin       = require('gulp-htmlmin');
const sass          = require('gulp-sass');
const cleanCSS      = require('gulp-clean-css');
const flatten       = require('gulp-flatten');
const replace       = require('gulp-replace');

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
  return gulp.src(['./src/**/*.scss'])
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src'));
});

gulp.task('minify-css', () => {
  return gulp.src('./src/**/*.css')
    .pipe(concat('main.css'))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(rev())
    .pipe(gulp.dest('./dist'));
});

//****************************** HTML ******************************

gulp.task('html', callback => {
  gulpSequence('minify-html', 'copy-index-html', 'inject', 'replace', 'minify-index')(callback);
});

gulp.task('minify-html', () => {
  return gulp.src(['./src/**/*.html', '!./src/**/_*.html'])
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(flatten())
    .pipe(gulp.dest('./dist'));
});

gulp.task('copy-index-html', () => {
  return gulp.src('./src/index.html')
    .pipe(gulp.dest('./'));
});

gulp.task('inject', () => {
  return gulp.src('./index.html')
    .pipe(inject(gulp.src(['./dist/*.css'], {read: false})))
    .pipe(inject(gulp.src(['./dist/*.js'], {read: false})))
    .pipe(gulp.dest('./'));
});

gulp.task('replace', () => {
  return gulp.src('./index.html')
    .pipe(replace(text('header'), file('./src/header/_header.html')))
    .pipe(replace(text('logo'), file('./src/logo/_logo.html')))
    .pipe(replace(text('golang'), file('./src/golang/_golang.html')))
    .pipe(replace(text('services'), file('./src/services/_services.html')))
    .pipe(replace(text('process'), file('./src/process/_process.html')))
    .pipe(replace(text('contact'), file('./src/contact/_contact.html')))
    .pipe(replace(text('footer'), file('./src/footer/_footer.html')))
    .pipe(replace(text('ourclients'), file('./src/ourclients/_ourclients.html')))
    .pipe(gulp.dest('./'));

  function text(name) {
    return `<!-- REPLACE ${name} -->`;
  }

  function file(path) {
    return fs.readFileSync(path, 'utf8');
  }
});

gulp.task('minify-index', () => {
  return gulp.src('./index.html')
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeComments: true
    }))
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
