/* eslint-disable no-undef */
const gulp = require('gulp');
const babel = require('gulp-babel');
const eslint = require('gulp-eslint');

// gulp dependencies

gulp.task('default', function() {
    // execute ESLint
    gulp.src(["es6/**/*.js", "public/es6/**/*.js"])
        .pipe(eslint())
        .pipe(eslint.format());
    // code for Node
    gulp.src("es6/**/*.js")
        .pipe(babel())
        .pipe(gulp.dest("dist"));
    // code for Browser
    gulp.src("public/es6/**/*.js")
        .pipe(babel())
        .pipe(gulp.dest("public/dist"));
});