const gulp		= require('gulp')
const server	= require('browser-sync').create()

const pugbase	= require('./pugbase')
const puginfo	= require('./puginfo')
const pughlu	= require('./pughlu')
const pugf1		= require('./pugf1')
const pugf2		= require('./pugf2')
const pugf3		= require('./pugf3')
const pugf4		= require('./pugf4')
const pugf5		= require('./pugf5')
const pugf6		= require('./pugf6')
const pugf7		= require('./pugf7')
const pugerrors	= require('./pugerrors')
const styles	= require('./styles')
const js		= require('./js')
const fonts		= require('./fonts')
const php		= require('./php')
const video		= require('./video')
const img		= require('./imgmin')

function readyReload(cb) {
	server.reload()
	cb()
}

module.exports = function serve(cb) {
		server.init({
				server: 'build',
				notify: false,
				open: true,
				cors: true
		})

		// pug by folders
		gulp.watch(['src/pages/_common/*.pug','src/pages/_includes/*.pug','src/pages/_mixins/*.pug','src/pages/_templates/*.pug','src/pages/*.pug'], { delay: 1500 }, gulp.series(pugbase, puginfo, pughlu, pugf1, pugf2, pugf3, pugf4, pugf5, pugf6, pugf7, pugerrors, readyReload))
		gulp.watch('src/pages/1-information-pages/*.pug', { delay: 500 }, gulp.series(puginfo, readyReload))
		gulp.watch('src/pages/2-high-level-uslugi/*.pug', { delay: 500 }, gulp.series(pughlu, readyReload))
		gulp.watch('src/pages/f1-uborka-kvartir/*.pug', { delay: 500 }, gulp.series(pugf1, readyReload))
		gulp.watch('src/pages/f2-uborka-domov/*.pug', { delay: 500 }, gulp.series(pugf2, readyReload))
		gulp.watch('src/pages/f3-uborka-ofisov/*.pug', { delay: 500 }, gulp.series(pugf3, readyReload))
		gulp.watch('src/pages/f4-himchistka/*.pug', { delay: 500 }, gulp.series(pugf4, readyReload))
		gulp.watch('src/pages/f5-moyka-okon-v-ramenskom/*.pug', { delay: 500 }, gulp.series(pugf5, readyReload))
		gulp.watch('src/pages/f6-uborka-pomescheniy/*.pug', { delay: 500 }, gulp.series(pugf6, readyReload))
		gulp.watch('src/pages/f7-uborka-kommercheskoy-nedvizhimosti/*.pug', { delay: 500 }, gulp.series(pugf7, readyReload))
		gulp.watch('src/pages/f8-errors/*.pug', { delay: 500 }, gulp.series(pugerrors, readyReload))
		// styles
		gulp.watch('src/styles/**/*.sass', { delay: 1000 }, gulp.series(styles, readyReload))
		// js-scripts
		gulp.watch('src/js/**/*.js', gulp.series(js, readyReload))
		// php-scripts
		gulp.watch('src/php/**/*.php', gulp.series(php, readyReload))
		// content
		gulp.watch('src/fonts/*.*', gulp.series(fonts, readyReload))
		gulp.watch('src/img/**/*.*', gulp.series(img, readyReload))
		gulp.watch('src/video/*.*', gulp.series(video, readyReload))
		return cb()
}
