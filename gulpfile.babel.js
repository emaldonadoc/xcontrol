const gulp = require('gulp');
const clean = require('gulp-clean');
const babel = require('gulp-babel');

gulp.task('clean', () => 
  gulp.src('dist/', {allowEmpty: true, read: false})
    .pipe(clean())
);

gulp.task('build', () => 
	gulp.src('src/**/*.js')
		.pipe(babel({
			plugins: ['@babel/transform-runtime']
    }))
		.pipe(gulp.dest('dist'))
);