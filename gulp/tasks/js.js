const gulp = require('gulp')
const plumber = require('gulp-plumber')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify-es').default

// Передаем JS-скрипты в js
module.exports = function js() {
  return gulp.src([
    'src/local_modules/jquery/dist/jquery.min.js', // JQuery - should be on top
	'src/local_modules/lazysizes/lazysizes.min.js', // Lazy Load
	'src/local_modules/slick/slick.min.js', // Slick Slider
	'src/local_modules/ihavecookies/jquery.ihavecookies.min.js', // ShowingCookies
	'src/local_modules/mask-plugin/jquery.mask.min.js', // Mask for inputs
	'src/local_modules/SourceBuster/sourcebuster.min.js', // SourceBuster
	'src/local_modules/activity60/jquery.activity.min.js', // Goal 60 sec
	'src/js/calc_flat.js', // Calculator Part for Flats
	'src/js/calc_houses.js', // Calculator Part for Houses
	'src/js/thousandSeparator.js', // Calculator Part make space separation for thousands
	'src/js/main.js']) // Should be the last
    .pipe(plumber())
    .pipe(concat('main.min.js')) // Concate evrything in one file
    .pipe(uglify()) // Minimize js
    .pipe(gulp.dest('build/js'))
}

