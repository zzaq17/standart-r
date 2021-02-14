const gulp = require('gulp')

// отправка в папку build/fonts шрифтов с проверкой изменений
module.exports = function fonts() {
	return gulp.src('src/fonts/*')
		.pipe(gulp.dest('build/fonts'))
}
