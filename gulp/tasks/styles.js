const gulp = require('gulp')
const plumber = require('gulp-plumber')
const sass = require('gulp-sass')
const cleanCSS = require('gulp-clean-css')
const shorthand = require('gulp-shorthand')
const autoprefixer = require('gulp-autoprefixer')
const rename = require("gulp-rename")

module.exports = function styles() {
  return gulp.src('src/styles/*.+(scss|sass)')
    .pipe(plumber())
    .pipe(sass())
    .pipe(autoprefixer({
      grid: false, // Optional. Enable CSS Grid
      // @ts-ignore
      overrideBrowserslist: ['last 10 versions']
    }))
    .pipe(shorthand())
    .pipe(cleanCSS({
      debug: true,
      compatibility: '*'
    }, details => {
      console.log(`${details.name}:base:${details.stats.originalSize} - min: ${details.stats.minifiedSize}`)
    }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('build/css'))
}

