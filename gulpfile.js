var gulp = require('gulp'),
	  minifyCSS = require('gulp-minify-css'),
	 	minifyJS = require('gulp-uglify'),
	 	useref = require('gulp-useref'),
	 	imagemin = require('gulp-imagemin'),
	 	clean = require('gulp-clean'),
	 	gulpif  = require('gulp-if');

//Concatenate & Minify js/css files
gulp.task('html', function(){
	var assets = useref.assets();

  return gulp.src('*.html')
    .pipe(assets)
    .pipe(gulpif('*.js', minifyJS()))
    .pipe(gulpif('*.css', minifyCSS()))
    .pipe(assets.restore())
    .pipe(useref())
    .pipe(gulp.dest('dist/'));
});

gulp.task('imagemin', function(){
	return gulp.src('src/img/**/*')
	.pipe(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true }))
	.pipe(gulp.dest('dist/src/img'))
});

gulp.task('clean', function() {
  return gulp.src(['src/css/', 'src/js/', 'src/img/'], {read: false})
	.pipe(clean());
});

// gulp.task('watch',function(){
// 	gulp.watch('src/js/*.js', ['scripts']).on('change', function(e){
// 		console.log('Le fichier ' + e.path + ' a ete modifie');
// 	})
// 	gulp.watch('src/css/*.css', ['css'])
// });

//Default Task
gulp.task('default', ['html','imagemin','watch']);

