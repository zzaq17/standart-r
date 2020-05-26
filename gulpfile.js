
var gulp = require('gulp'),
	serve = require('./gulp/tasks/serve'),
	pug = require('./gulp/tasks/pug2html'),
	styles = require('./gulp/tasks/styles'),
	script = require('./gulp/tasks/script'),
	send = require('./gulp/tasks/fonts'),
	clean = require('./gulp/tasks/clean'),
	lighthouse = require('./gulp/tasks/lighthouse'),
	ftp = require('vinyl-ftp'),
	imagemin = require('gulp-imagemin'),
	log = require('fancy-log'),
	puppeteer = require('puppeteer'),
	critical = require('critical').stream
	/* не пригодилось =)
	// uncss = require('gulp-uncss'),
	// postcss = require('gulp-postcss'),
	 // svgSprite = require('./gulp/tasks/svgSprite'),
	// cache = require('gulp-cache')
	/*emitty = require('emitty').setup('app/templates', 'pug', {
		makeVinylFile: true
		});*/

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
		// host:      'ftp70.hostland.ru',
		// user:      'host1681653_dev',
		// password:  'kirpix',

		host:      'ftp21.hostland.ru',
		user:      'host1328462',
		password:  'kirpix',

		parallel:  10
	});

	var globs = [
	'build/**',
	/*'dist/.htaccess',*/
	];
	return gulp.src(globs, {buffer: false})
	// .pipe(conn.dest('/ramenskoye'));
	.pipe(conn.dest('/testboxe.ru/htdocs/testramen'));

});



// gulp.task('uncss', function () {
// 	return gulp.src('build/css/main.min.css')
// 		.pipe(uncss({
// 			html: ['build/index.html']
// 		}))
// 		.pipe(gulp.dest('build'));
// });

// const browser = puppeteer.launch({
// 	ignoreDefaultArgs: ['--disable-extensions'],
// 	headless: true,
// 	args: ['--no-sandbox', '--disable-setuid-sandbox']
// 	});


// // Generate & Inline Critical-path CSS
// gulp.task('critical', function () {
// 		return gulp.src('build/*.html')
// 				.pipe(critical({base: 'build/', inline: true, css: 'build/css/main.min.css'}))
// 				.on('error', function(err) { log.error(err.message); })
// 				.pipe(gulp.dest('build'));
// });

// gulp.task('images', function () {
// 	return gulp
// 	  .src('*.jpg')
// 	  .pipe(responsive(
// 			{'9042.jpg': { width: 320}}
// 			// '*.png': { width: 320, rename: { suffix: '-320px' }},
// 			// '*': { width: 320, rename: { suffix: '-320px' }}

// 		//   {
// 		// 	quality: 85,
// 		// 	progressive: true,
// 		// 	compressionLevel: 5,
// 		// 	withMetadata: false
// 		//   }
// 		)
// 	  )
// 	  .pipe(gulp.dest('src/img'))
//   })

const dev = gulp.parallel(pug.pug, pug.pugf1, pug.pugf2, pug.pugf3, pug.pugf4, pug.pugf5, pug.pugf6, pug.pugf7, pug.pugf8, styles, script, send.fonts, send.img, send.php, send.video, /*'imagemin'*/)

const build = gulp.series(clean, dev)

module.exports.start = gulp.series(setMode(), build, 'imagemin', serve)
module.exports.build = gulp.series(setMode(true), build)
module.exports.lighthouse = gulp.series(lighthouse)
