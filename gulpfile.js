const gulp		= require('gulp')

const serve		= require('./gulp/tasks/serve')
const clean		= require('./gulp/tasks/clean')
const pugbase	= require('./gulp/tasks/pugbase')
const pughlu	= require('./gulp/tasks/pughlu')
const puginfo	= require('./gulp/tasks/puginfo')
const pugf1		= require('./gulp/tasks/pugf1')
const pugf2		= require('./gulp/tasks/pugf2')
const pugf3		= require('./gulp/tasks/pugf3')
const pugf4		= require('./gulp/tasks/pugf4')
const pugf5		= require('./gulp/tasks/pugf5')
const pugf6		= require('./gulp/tasks/pugf6')
const pugf7		= require('./gulp/tasks/pugf7')
const pugerrors	= require('./gulp/tasks/pugerrors')
const styles	= require('./gulp/tasks/styles')
const js		= require('./gulp/tasks/js')
const fonts		= require('./gulp/tasks/fonts')
const img		= require('./gulp/tasks/imgmin')
const php		= require('./gulp/tasks/php')
const video		= require('./gulp/tasks/video')
const send		= require('./gulp/tasks/send')
const deploy	= require('./gulp/tasks/deploy')

function setMode(isProduction = false) {
	return cb => {
		process.env.NODE_ENV = isProduction ? 'production' : 'development'
		cb()
	}
}

const dev = gulp.parallel(img, pugbase, pughlu, puginfo, pugf1, pugf2, pugf3, pugf4, pugf5, pugf6, pugf7, pugerrors, styles, js, fonts, php, video)
const build = gulp.series(clean, dev)
const prod = gulp.series(deploy)

module.exports.start = gulp.series(setMode(), build, serve)
module.exports.clean = gulp.series(setMode(), clean)
module.exports.build = gulp.series(setMode(true), build, send.ht1, send.ht2, send.ht3, send.ht4, send.ht5, send.ht6, send.ht7, send.ht8, send.settings)
module.exports.prod = gulp.series(setMode(true), prod)
