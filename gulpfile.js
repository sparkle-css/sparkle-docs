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
		.pipe(gulp.dest('dist/styles/'))
        .pipe(browserSync.reload({ stream: true }));
});

// RENDER HTML FILES
gulp.task('pug:index', function buildHTML() {
    return gulp.src('./index.pug')
        .pipe(
            pug({ pretty: true })
        )
        .pipe(gulp.dest('./'))
        .pipe(browserSync.reload({ stream: true }));
});

// CREATE SERVER
gulp.task('serve', ['pug:index', 'sassify'], function() {
    browserSync.init({
        server: "./"
    });

    gulp.watch(['dev/styles/sass/main.sass'], ['sassify']);
    gulp.watch(['index.pug'], ['pug:index']);
    gulp.watch("docs/*.html").on('change', browserSync.reload);
});

// DEFAULT RUN
gulp.task('default', ['pug', 'sassify']);