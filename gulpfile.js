var gulp = require('gulp');
var concat = require('gulp-concat');
var minify = require('gulp-minify');
var cleanCss = require('gulp-clean-css');
var imagemin = require('gulp-imagemin');

gulp.task('get-html', function() {
   gulp.src(['*.html','**/*.html'])
   .pipe(gulp.dest('../fb88-prod'));
});

// js
gulp.task('minify-js', function() {
   gulp.src('js/**/*.js')
   .pipe(minify({
       ext:{
           min:'.js'
	   },
       noSource: true,
       ignoreFiles:['/node_modules/**/*.js']
   }))
   .pipe(gulp.dest('../fb88-prod/js'));
});

// css
gulp.task('minify-css2', function() {
   gulp.src('js/**/*.css')
   .pipe(cleanCss())
   .pipe(gulp.dest('../fb88-prod/js'));
});


// css
gulp.task('minify-css', function() {
   gulp.src('css/*.css')
   .pipe(cleanCss())
   .pipe(gulp.dest('../fb88-prod/css'));
});

// css
gulp.task('minify-revo-css', function() {
   gulp.src('include/**/*.css')
   .pipe(cleanCss())
   .pipe(gulp.dest('../fb88-prod/include'));
});

// image
gulp.task('optimize-image', function() {
   gulp.src(['images/**/*.jpg','images/**/*.jpeg','images/**/*.png','images/**/*.gif'])
   .pipe(imagemin())
   .pipe(gulp.dest('../fb88-prod/images'));
});

gulp.task('default', ['get-html','minify-js','minify-css','minify-css2','minify-revo-css','optimize-image']);
