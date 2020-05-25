const gulp = require('gulp')
const plumber = require('gulp-plumber')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify-es').default

module.exports = function script() {
  return gulp.src([
    'src/local_modules/jquery/dist/jquery.min.js',
	'src/local_modules/lazysizes/lazysizes.min.js', // Lazy Load
	'src/local_modules/slick/slick.min.js', // Slick Slider
	'src/local_modules/ihavecookies/jquery.ihavecookies.min.js', // ShowingCookies
	'src/local_modules/mask-plugin/jquery.mask.min.js', // Mask for inputs
	// 'src/local_modules/SourceBuster/sourcebuster.min.js', // sourcebuster
	// 'src/local_modules/activity60/jquery.activity.min.js', // Goal 60 sec
	'src/js/calc_flat.js', // Calculator Part
	'src/js/calc_houses.js', // Calculator Part
	'src/js/thousandSeparator.js', // Calculator Part
	'src/js/main.js'])
    .pipe(plumber())
    .pipe(concat('main.min.js'))
    .pipe(uglify()) // Минимизировать весь js (на выбор)
    .pipe(gulp.dest('build/js'))
}

