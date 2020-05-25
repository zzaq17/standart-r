const gulp = require('gulp')
const plumber = require('gulp-plumber')
const pug = require('gulp-pug')
// const htmlValidator = require('gulp-w3c-html-validator')
const config = require('../config')

// module.exports = function pug2html() {
// 	return gulp.src('src/pages/*.pug')
// 		.pipe(plumber())
// 		.pipe(pug({ pretty: config.pug2html.beautifyHtml }))
// 		.pipe(htmlValidator())
// 		.pipe(gulp.dest('build'))

// }

module.exports = {
	pug: function() {
	return gulp.src('src/pages/*.pug')
		.pipe(plumber())
		.pipe(pug({ pretty: config.pug2html.beautifyHtml }))
		// .pipe(htmlValidator())
		.pipe(gulp.dest('build'))
	},

	pugf1: function() {
	return gulp.src('src/pages/uborka-kvartir/*.pug')
		.pipe(plumber())
		.pipe(pug({ pretty: config.pug2html.beautifyHtml }))
		// .pipe(htmlValidator())
		.pipe(gulp.dest('build/uborka-kvartir'))
	},

	pugf2: function() {
		return gulp.src('src/pages/uborka-domov/*.pug')
		.pipe(plumber())
		.pipe(pug({ pretty: config.pug2html.beautifyHtml }))
		// .pipe(htmlValidator())
		.pipe(gulp.dest('build/uborka-domov'))
	},
	pugf3: function() {
	return gulp.src('src/pages/uborka-ofisov/*.pug')
		.pipe(plumber())
		.pipe(pug({ pretty: config.pug2html.beautifyHtml }))
		// .pipe(htmlValidator())
		.pipe(gulp.dest('build/uborka-ofisov'))
	},

	pugf4: function() {
		return gulp.src('src/pages/himchistka/*.pug')
		.pipe(plumber())
		.pipe(pug({ pretty: config.pug2html.beautifyHtml }))
		// .pipe(htmlValidator())
		.pipe(gulp.dest('build/himchistka'))
	},
	pugf5: function() {
	return gulp.src('src/pages/moyka-okon-i-balkonov/*.pug')
		.pipe(plumber())
		.pipe(pug({ pretty: config.pug2html.beautifyHtml }))
		// .pipe(htmlValidator())
		.pipe(gulp.dest('build/moyka-okon-i-balkonov'))
	},

	pugf6: function() {
		return gulp.src('src/pages/uborka-pomescheniy/*.pug')
		.pipe(plumber())
		.pipe(pug({ pretty: config.pug2html.beautifyHtml }))
		// .pipe(htmlValidator())
		.pipe(gulp.dest('build/uborka-pomescheniy'))
	},
	pugf7: function() {
	return gulp.src('src/pages/fotografii-rabot/*.pug')
		.pipe(plumber())
		.pipe(pug({ pretty: config.pug2html.beautifyHtml }))
		// .pipe(htmlValidator())
		.pipe(gulp.dest('build/fotografii-rabot'))
	},

	pugf8: function() {
		return gulp.src('src/pages/blog/*.pug')
		.pipe(plumber())
		.pipe(pug({ pretty: config.pug2html.beautifyHtml }))
		// .pipe(htmlValidator())
		.pipe(gulp.dest('build/blog'))
	}

}
