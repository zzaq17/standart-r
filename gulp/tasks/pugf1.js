const gulp = require('gulp')
const plumber = require('gulp-plumber')
const pug = require('gulp-pug')
const htmlValidator = require('gulp-w3c-html-validator')
const config = require('../config')

module.exports = function pugf1() {
	return gulp.src('src/pages/f1-uborka-kvartir/*', {since: gulp.lastRun(pug)})
		.pipe(plumber())
		.pipe(pug({ pretty: config.pug2html.beautifyHtml }))
		.pipe(htmlValidator())
		.pipe(gulp.dest('build/uborka-kvartir'))
	}
