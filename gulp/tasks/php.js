const gulp = require('gulp')

// отправка в папку build/php php-скриптов с проверкой изменений
module.exports = function php() {
  return gulp.src('src/php/*')
    .pipe(gulp.dest('build/php'))
  }
