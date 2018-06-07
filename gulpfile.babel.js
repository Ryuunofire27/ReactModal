/*import gulp from 'gulp';
import babel from 'gulp-babel';
import pug from 'gulp-pug';
import browserSync from 'browser-sync';
import sass from 'gulp-sass';
import postcss from 'gulp-postcss';
import cssnano from 'cssnano';*/
const gulp = require('gulp');
const babel = require('gulp-babel');
const pug = require('gulp-pug');
const browserSync = require('browser-sync');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');

const server = browserSync.create();

const postCSSPlugins = [
	cssnano({
		autoprefixer: {
			add: true
		}
	})
];

gulp.task('es6', ()=>{
	gulp.src('./dev/js/*.js')
		.pipe(babel({
			"presets": [
				"env",
				"react"
			],
			"plugins": [
				"transform-class-properties"
			]
		}))
		.pipe(gulp.dest('./public/js'));
});

gulp.task('sass', ()=>{
	gulp.src('./dev/scss/*.scss')
		.pipe(sass())
		.pipe(postcss(postCSSPlugins))
		.pipe(gulp.dest('./public/css'))
		.pipe(server.stream({match: '**/*.css'}));
});

gulp.task('pug', ()=>{
	gulp.src('./dev/pug/*.pug')
		.pipe(pug())
		.pipe(gulp.dest('./public'))
});

gulp.task('default', ()=>{
	server.init({
		server: {
			baseDir: './public'
		}
	});
	gulp.watch('./dev/js/*.js', ['es6', server.reload]);
	gulp.watch('./dev/pug/**/*.pug', ['pug', server.reload]);
	gulp.watch('./dev/scss/**/*.scss', ['sass']);
});