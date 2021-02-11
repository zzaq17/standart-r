var gulp = require('gulp'),
	serve = require('./gulp/tasks/serve'),
	pug = require('./gulp/tasks/pug2html'),
	styles = require('./gulp/tasks/styles'),
	script = require('./gulp/tasks/script'),
	send = require('./gulp/tasks/send'),
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

		// host:      'ftp49.hostland.ru',
		// user:      'host1328462_devz',
		// password:  'zpKyzTNCTZ',

		parallel:  10,

		log: gutil.log
	});

	var globs = [
	'build/**',
	// 'build/.htaccess'
	];

	return gulp.src(globs, {buffer: false})
	.pipe(conn.dest('/ramenskoye'));
	// .pipe(conn.dest('/r'));

});

const dev = gulp.parallel(pug.pug, pug.pugf1, pug.pugf2, pug.pugf3, pug.pugf4, pug.pugf5, pug.pugf6, pug.pugf7, pug.errors, styles, script, send.fonts, send.img, send.php, send.video)

const build = gulp.series(clean, dev)

module.exports.start = gulp.series(setMode(), build, serve)
module.exports.build = gulp.series(setMode(true), build, send.ht1, send.ht2, send.ht3, send.ht4, send.ht5, send.ht6, send.ht7, send.ht8, send.settings)