var gulp = require('gulp'),
    sass = require('gulp-sass'),
    minify = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    concatenate = require('gulp-concat'),
    assets = {
      styles: {src: ['bower_components/normalize.css/normalize.css', 'assets/styles/*.scss'], dst: '.tmp/public/styles', file: 'style.css'},
      js: {
        src: [
          'assets/js/dependencies/sails.io.js',
          'bower_components/angular/angular.js',
          'bower_components/angular-route/angular-route.js',
          'assets/js/**'
        ],
        dst: '.tmp/public/js',
        file: 'script.js'
      },
      fonts: {src: 'assets/fonts/*', dst: '.tmp/public/fonts'},
      images: {src: 'assets/images/*', dst: '.tmp/public/images'},
      templates: {src: 'assets/templates/*', dst: '.tmp/public/templates'},
    };

gulp.task('css', function() {
  return gulp.src(assets.styles.src)
             .pipe(concatenate(assets.styles.file))
             .pipe(sass())
             .pipe(minify())
             .pipe(gulp.dest(assets.styles.dst));
});

gulp.task('images', function () {
  return gulp.src(assets.images.src)
             .pipe(gulp.dest(assets.images.dst));
});

gulp.task('templates', function () {
  return gulp.src(assets.templates.src)
             .pipe(gulp.dest(assets.templates.dst));
});

gulp.task('fonts', function () {
  return gulp.src(assets.fonts.src)
             .pipe(gulp.dest(assets.fonts.dst));
});

gulp.task('js', function () {
  return gulp.src(assets.js.src)
             .pipe(concatenate(assets.js.file))
             .pipe(uglify())
             .pipe(gulp.dest(assets.js.dst));
});

gulp.task('watch', ['css', 'js', 'fonts', 'images', 'templates'], function () {
  gulp.watch(assets.styles.src, ['css']);
  gulp.watch(assets.js.src, ['js']);
  gulp.watch(assets.fonts.src, ['fonts']);
  gulp.watch(assets.images.src, ['images']);
  gulp.watch(assets.templates.src, ['templates']);
});
