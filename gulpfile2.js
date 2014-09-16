var gulp = require('gulp'),
	less = require('gulp-less'),
	autoprefixer = require('gulp-autoprefixer'),
	minifycss = require('gulp-minify-css'),
	uglify = require('gulp-uglify'),
	imagemin = require('gulp-imagemin'),
	rename = require('gulp-rename'),
	clean = require('gulp-clean'),
	notify = require('gulp-notify'),
	cache = require('gulp-cache'),
	livereload = require('gulp-livereload'),
	lr = require('tiny-lr'),
	server = lr();

	gulp.task('styles', function() {
	  return gulp.src('src/style/*.less')
		.pipe(less())
		.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
		.pipe(gulp.dest('src/style'))
		.pipe(rename({suffix: '.min'}))
		.pipe(minifycss())
		.pipe(gulp.dest('src/style/min'))
		.pipe(livereload(server))
		.pipe(notify({ message: 'Styles task complete' }));
	});

	gulp.task('scripts', function() {
	  return gulp.src('src/js/*.js')
	    .pipe(rename({suffix: '.min'}))
	    .pipe(uglify())
	    .pipe(gulp.dest('src/js/min'))
	    .pipe(notify({ message: 'Scripts task complete' }));
	});

	gulp.task('images', function() {
	  return gulp.src('src/img/*')
		.pipe(cache(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true })))
		.pipe(gulp.dest('src/img/min'))
		.pipe(livereload(server))
		.pipe(notify({ message: 'Images task complete' }));
	});


	gulp.task('clean', function() {
	  return gulp.src(['src/style/min', 'src/js/min', 'src/img/min'], {read: false})
		.pipe(clean());
	});



	gulp.task('default', ['clean'], function() {
		gulp.start('styles', 'images', 'scripts');
	});

	gulp.task('watch', function() {

	  // Listen on port 35729
	  	server.listen(35729, function (err) {
			if (err) {
			  return console.log(err)
			};

			// Watch .less files
			gulp.watch('src/style/*.less', ['styles']);

			// Watch .js files
			gulp.watch('src/js/*.js', ['scripts']);

			// Watch image files
			gulp.watch('src/img/*', ['images']);

		});

	});