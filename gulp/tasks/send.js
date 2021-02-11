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
  },

  ht1: function() {
    return gulp.src('src/pages/himchistka/.htaccess')
      .pipe(gulp.dest('build/himchistka/'))
  },
  ht2: function() {
    return gulp.src('src/pages/moyka-okon-v-ramenskom/.htaccess')
      .pipe(gulp.dest('build/moyka-okon-v-ramenskom/'))
  },
  ht3: function() {
    return gulp.src('src/pages/uborka-domov/.htaccess')
      .pipe(gulp.dest('build/uborka-domov/'))
  },
  ht4: function() {
    return gulp.src('src/pages/uborka-kommercheskoy-nedvizhimosti/.htaccess')
      .pipe(gulp.dest('build/uborka-kommercheskoy-nedvizhimosti/'))
  },
  ht5: function() {
    return gulp.src('src/pages/uborka-kvartir/.htaccess')
      .pipe(gulp.dest('build/uborka-kvartir/'))
  },
  ht6: function() {
    return gulp.src('src/pages/uborka-ofisov/.htaccess')
      .pipe(gulp.dest('build/uborka-ofisov/'))
  },
  ht7: function() {
    return gulp.src('src/pages/uborka-pomescheniy/.htaccess')
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