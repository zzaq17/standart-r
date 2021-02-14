const gulp = require('gulp')
const plumber = require('gulp-plumber')
const pug = require('gulp-pug')
// const htmlValidator = require('gulp-w3c-html-validator')
const config = require('../config')

module.exports = function pugbase() {
	return gulp.src(['src/pages/*.pug'])
		.pipe(plumber())
		.pipe(pug({ pretty: config.pug2html.beautifyHtml }))
		// .pipe(htmlValidator())
		.pipe(gulp.dest('build'))
	}
