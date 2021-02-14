const gulp = require('gulp')
const plumber = require('gulp-plumber')
const pug = require('gulp-pug')
// const htmlValidator = require('gulp-w3c-html-validator')
const config = require('../config')

module.exports = function pugf7() {
	return gulp.src('src/pages/f7-uborka-kommercheskoy-nedvizhimosti/*.pug', {since: gulp.lastRun(pug)})
		.pipe(plumber())
		.pipe(pug({ pretty: config.pug2html.beautifyHtml }))
		// .pipe(htmlValidator())
		.pipe(gulp.dest('build/uborka-kommercheskoy-nedvizhimosti'))
	}
