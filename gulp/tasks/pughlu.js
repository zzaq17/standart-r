const gulp = require('gulp')
const plumber = require('gulp-plumber')
const pug = require('gulp-pug')
// const htmlValidator = require('gulp-w3c-html-validator')
const config = require('../config')

module.exports = function pughlu() {
	return gulp.src('src/pages/2-high-level-uslugi/*.pug', {since: gulp.lastRun(pug)})
		.pipe(plumber())
		.pipe(pug({ pretty: config.pug2html.beautifyHtml }))
		// .pipe(htmlValidator())
		.pipe(gulp.dest('build'))
	}
