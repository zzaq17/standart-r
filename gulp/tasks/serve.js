const gulp = require('gulp')

const styles = require('./styles')
const pug = require('./pug2html')
const send = require('./fonts')
const script = require('./script')

const server = require('browser-sync').create()

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

		gulp.watch('src/img/*.*', gulp.series(readyReload))
		gulp.watch('src/styles/**/*.sass', { delay: 500 }, gulp.series(styles, cb => gulp.src('build/css').pipe(server.stream()).on('end', cb)))
		gulp.watch('src/js/**/*.js', gulp.series(script, readyReload))
		gulp.watch('src/php/**/*.php', gulp.series(send.php, readyReload))
		// pug compilation by folder
		gulp.watch('src/pages/**/*.pug', { delay: 1500 }, gulp.series(pug.pug, pug.pugf1, pug.pugf2, pug.pugf3, pug.pugf4, pug.pugf5, pug.pugf6, pug.pugf7, pug.errors, readyReload))
		return cb()
}




