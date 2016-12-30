var gulp = require('gulp');
var ts = require('gulp-typescript');
var tsProject = ts.createProject('tsconfig.json');
var browserify = require('gulp-browserify');
var notify = require('gulp-notify');
var livereload = require('gulp-livereload');
var http = require('http');
var st = require('st');

gulp.task('compile', () => {
	const tsResult = tsProject.src()
		.pipe(tsProject());
	return tsResult.js.pipe(gulp.dest('build'));
});


// Basic usage
gulp.task('scripts', ['compile'], function () {
	// Single entry point to browserify
	gulp.src('build/main.js')
		.pipe(browserify({
			insertGlobals: true,
			debug: true
		}))
		.pipe(gulp.dest('./dist'))
		.pipe(notify('Compile is done'))
		.pipe(livereload());
});

gulp.task('watch', ['server'], function () {
	livereload.listen();
	gulp.watch('src/**/*.ts', ['scripts']);
});

gulp.task('server', ['scripts'], function (done) {
	http.createServer(
		st({ path: __dirname + '/', index: 'index.html', cache: false })
	).listen(8080, done);
});