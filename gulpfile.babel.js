const gulp = require('gulp');
var clean = require('gulp-clean');
const babel = require('gulp-babel');

gulp.task('default', () =>
	gulp.src('src/**/*.js')
		.pipe(babel({
			plugins: ['@babel/transform-runtime']
    }))
    .pipe(clean())
		.pipe(gulp.dest('dist'))
);