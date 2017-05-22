var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');


gulp.task('sass', function(){
	return gulp.src('src/scss/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('src/css'))
});
//
// gulp.task('scripts',function(){
// 	return gulp.src('./assets/js/app.js')
// 				.pipe(concat('app.js'))
// 				.pipe(gulp.dest('./public/js'));
//
// });

gulp.task('default', function(){
	gulp.watch('src/scss/**/*.scss',['sass']);
	// gulp.watch('./assets/js/**/*.js',['scripts']);
});
