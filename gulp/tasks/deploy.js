const gulp = require('gulp')
const gutil = require('gulp-util')
const ftp = require('vinyl-ftp')

module.exports = function deploy() {
		var conn = ftp.create({
		/* production */
			host:      'ftp60.hostland.ru',
			user:      'host1681653_dev',
			password:  'kirpix',

		/* dev */
			// host:      'ftp49.hostland.ru',
			// user:      'host1328462_devz',
			// password:  'zpKyzTNCTZ',

			parallel:  7,
			log: gutil.log
		});

		var globs = [
			'build/**',
		];

		return gulp.src(globs, {buffer: false})
		/* production */
			.pipe(conn.dest('/ramenskoye'));
		/* dev */
			// .pipe(conn.dest('/r'));

	}
