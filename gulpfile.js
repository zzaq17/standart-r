var gulp = require('gulp'),
	serve = require('./gulp/tasks/serve'),
	pug = require('./gulp/tasks/pug2html'),
	styles = require('./gulp/tasks/styles'),
	script = require('./gulp/tasks/script'),
	send = require('./gulp/tasks/fonts'),
	clean = require('./gulp/tasks/clean'),
	gutil = require('gulp-util'),
	ftp = require('vinyl-ftp'),
	imagemin = require('gulp-imagemin')


function setMode(isProduction = false) {
	return cb => {
		process.env.NODE_ENV = isProduction ? 'production' : 'development'
		cb()
	}
}

gulp.task('imagemin', function() {
	return gulp.src(['src/img/*.*', '!src/img/404.gif'])
	.pipe(imagemin())
	.pipe(gulp.dest('build/img'));
});

gulp.task('deploy', function() {

	var conn = ftp.create({
		host:      'ftp60.hostland.ru',
		user:      'host1681653_dev',
		password:  'n5oQ1L1el6',

		// host:      'ftp21.hostland.ru',
		// user:      'host1328462_full',
		// password:  'kirpix',

		parallel:  10,

		log: gutil.log
	});

	var globs = [
	'build/**',
	/*'dist/.htaccess',*/
	];
	return gulp.src(globs, {buffer: false})
	.pipe(conn.dest('/ramenskoye'));
	// .pipe(conn.dest('/testramen'));

});

const dev = gulp.parallel(pug.pug, pug.pugf1, pug.pugf2, pug.pugf3, pug.pugf4, pug.pugf5, pug.pugf6, pug.pugf7, pug.errors, styles, script, send.fonts, send.img, send.php, send.video)

const build = gulp.series(clean, dev)

module.exports.start = gulp.series(setMode(), build, serve)
module.exports.build = gulp.series(setMode(true), build)
