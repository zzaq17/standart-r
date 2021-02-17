const gulp = require('gulp')
const plumber = require('gulp-plumber')
const pug = require('gulp-pug')
const htmlValidator = require('gulp-w3c-html-validator')
const config = require('../config')

module.exports = function pugerrors() {
		return gulp.src('src/pages/f8-errors/*.pug')
		.pipe(plumber())
		.pipe(pug({ pretty: config.pug2html.beautifyHtml }))
		.pipe(htmlValidator())
		.pipe(gulp.dest('build/errors'))
	}
