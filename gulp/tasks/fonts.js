const gulp = require('gulp')

module.exports = {
  fonts: function() {
  return gulp.src('src/fonts/*')
    .pipe(gulp.dest('build/fonts'))
},

  php: function() {
  return gulp.src('src/php/*')
    .pipe(gulp.dest('build/php'))
  },

  video: function() {
    return gulp.src('src/video/*')
      .pipe(gulp.dest('build/video'))
  },

  img: function() {
    return gulp.src('src/img/**/*')
      .pipe(gulp.dest('build/img'))
  }
}