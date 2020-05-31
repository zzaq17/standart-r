const gulp = require('gulp')
const plumber = require('gulp-plumber')
const pug = require('gulp-pug')
const config = require('../config')

module.exports = {
	pug: function() {
	return gulp.src(['src/pages/*.pug', '!src/pages/test*.pug'])
		.pipe(plumber())
		.pipe(pug({ pretty: config.pug2html.beautifyHtml }))
		.pipe(gulp.dest('build'))
	},
	pugf1: function() {
	return gulp.src('src/pages/uborka-kvartir/*.pug')
		.pipe(plumber())
		.pipe(pug({ pretty: config.pug2html.beautifyHtml }))
		.pipe(gulp.dest('build/uborka-kvartir'))
	},
	pugf2: function() {
		return gulp.src('src/pages/uborka-domov/*.pug')
		.pipe(plumber())
		.pipe(pug({ pretty: config.pug2html.beautifyHtml }))
		.pipe(gulp.dest('build/uborka-domov'))
	},
	pugf3: function() {
	return gulp.src('src/pages/uborka-ofisov/*.pug')
		.pipe(plumber())
		.pipe(pug({ pretty: config.pug2html.beautifyHtml }))
		.pipe(gulp.dest('build/uborka-ofisov'))
	},
	pugf4: function() {
		return gulp.src('src/pages/himchistka/*.pug')
		.pipe(plumber())
		.pipe(pug({ pretty: config.pug2html.beautifyHtml }))
		.pipe(gulp.dest('build/himchistka'))
	},
	pugf5: function() {
	return gulp.src('src/pages/moyka-okon-v-ramenskom/*.pug')
		.pipe(plumber())
		.pipe(pug({ pretty: config.pug2html.beautifyHtml }))
		.pipe(gulp.dest('build/moyka-okon-v-ramenskom'))
	},
	pugf6: function() {
		return gulp.src('src/pages/uborka-pomescheniy/*.pug')
		.pipe(plumber())
		.pipe(pug({ pretty: config.pug2html.beautifyHtml }))
		.pipe(gulp.dest('build/uborka-pomescheniy'))
	},
	pugf7: function() {
	return gulp.src('src/pages/uborka-kommercheskoy-nedvizhimosti/*.pug')
		.pipe(plumber())
		.pipe(pug({ pretty: config.pug2html.beautifyHtml }))
		.pipe(gulp.dest('build/uborka-kommercheskoy-nedvizhimosti'))
	},
	errors: function() {
		return gulp.src('src/pages/errors/*.pug')
		.pipe(plumber())
		.pipe(pug({ pretty: config.pug2html.beautifyHtml }))
		.pipe(gulp.dest('build/errors'))
	}
}
