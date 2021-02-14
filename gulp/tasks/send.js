const gulp = require('gulp')

module.exports = {
  ht1: function() {
    return gulp.src('src/pages/f4-himchistka/.htaccess')
      .pipe(gulp.dest('build/himchistka/'))
  },
  ht2: function() {
    return gulp.src('src/pages/f5-moyka-okon-v-ramenskom/.htaccess')
      .pipe(gulp.dest('build/moyka-okon-v-ramenskom/'))
  },
  ht3: function() {
    return gulp.src('src/pages/f2-uborka-domov/.htaccess')
      .pipe(gulp.dest('build/uborka-domov/'))
  },
  ht4: function() {
    return gulp.src('src/pages/f7-uborka-kommercheskoy-nedvizhimosti/.htaccess')
      .pipe(gulp.dest('build/uborka-kommercheskoy-nedvizhimosti/'))
  },
  ht5: function() {
    return gulp.src('src/pages/f1-uborka-kvartir/.htaccess')
      .pipe(gulp.dest('build/uborka-kvartir/'))
  },
  ht6: function() {
    return gulp.src('src/pages/f3-uborka-ofisov/.htaccess')
      .pipe(gulp.dest('build/uborka-ofisov/'))
  },
  ht7: function() {
    return gulp.src('src/pages/f6-uborka-pomescheniy/.htaccess')
      .pipe(gulp.dest('build/uborka-pomescheniy/'))
  },
  ht8: function() {
    return gulp.src('src/settings/.htaccess')
      .pipe(gulp.dest('build/'))
  },
  settings: function() {
    return gulp.src('src/settings/*')
      .pipe(gulp.dest('build/'))
  }
}
