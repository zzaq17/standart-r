const gulp = require('gulp')

// отправка в папку build/video видеофайлов с проверкой изменений
module.exports = function video() {
    return gulp.src('src/video/*')
      .pipe(gulp.dest('build/video'))
  }
