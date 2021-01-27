const gulp = require('gulp');
const clean = require('gulp-clean');
const babel = require('gulp-babel');


const cleanUp = () => 
	gulp
	.src('dist/', { allowEmpty: true, read: false })
	.pipe(clean());
	
const building = () => 
	gulp.src('src/**/*.js')
		.pipe(babel({
			plugins: ['@babel/transform-runtime']
    }))
		.pipe(gulp.dest('dist'))


gulp.task('watch', () => {
	return gulp.watch('src/**/*.js', gulp.series(cleanUp, building))
});

gulp.task('clean', cleanUp);

gulp.task('build', gulp.series(cleanUp, building));