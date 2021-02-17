const gulp = require('gulp')
const plumber = require('gulp-plumber')
const pug = require('gulp-pug')
const htmlValidator = require('gulp-w3c-html-validator')
const config = require('../config')

module.exports = function pugf2() {
	return gulp.src('src/pages/f2-uborka-domov/*.pug', {since: gulp.lastRun(pug)})
		.pipe(plumber())
		.pipe(pug({ pretty: config.pug2html.beautifyHtml }))
		.pipe(htmlValidator())
		.pipe(gulp.dest('build/uborka-domov'))
	}
