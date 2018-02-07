'use strict';

/* ==================================== */
/* PACKAGES
/* ==================================== */
var gulp = require ('gulp');
var sass = require ('gulp-sass');
var pug = require ('gulp-pug');
var browserSync = require('browser-sync').create();

/* ==================================== */
/* TASKS
/* ==================================== */
// RENDER CSS FILES
gulp.task('sassify', function() {
    return gulp.src('dev/styles/sass/main.sass')
        .pipe(sass({ outputStyle: 'expanded' })
            .on('error', sass.logError)
        )
		.pipe(gulp.dest('dist/styles/main.css'))
        .pipe(browserSync.reload({ stream: true }));
});

// RENDER HTML FILES
gulp.task('pug', function buildHTML() {
    return gulp.src('dev/*.pug')
        .pipe(
            pug({ pretty: true })
        )
        .pipe(gulp.dest('dist/docs/'))
        .pipe(browserSync.reload({ stream: true })); // <-- Remove if it doesn't work
});

// CREATE SERVER
gulp.task('serve', ['pug', 'sassify'], function() {
    browserSync.init({
        server: "./dist/"
    });

    gulp.watch(['dev/styles/sass/main.sass'], ['sassify']);
    gulp.watch(['dev/**/*.pug'], ['pug']);
    gulp.watch("docs/*.html").on('change', browserSync.reload);
});

// DEFAULT RUN
gulp.task('default', ['pug', 'sassify']);