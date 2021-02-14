const gulp = require('gulp')
const gutil = require('gulp-util')
const imgmin = require('gulp-imagemin')

// Сжимает и передает изображения из src/img и всех подпапок
module.exports = function img() {
	return gulp.src(['src/img/**/*', '!src/img/404.gif'])
		// .pipe(imgmin().on('error', gutil.log))
		.pipe(gulp.dest('build/img'))
	}
