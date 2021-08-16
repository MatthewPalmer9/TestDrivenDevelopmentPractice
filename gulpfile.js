'use strict';

let gulp = require('gulp'),
        mocha = require('gulp-mocha'),
        gutil = require('gulp-util');


gulp.task('mocha', () => {
    return gulp.src(['test/*.mjs'], {read:true})
        .pipe(mocha({reporter: 'list'}))
        .on('error', gutil.log);
});



gulp.task('watch-mocha', () => {
    gulp.watch(['./test/*.mjs'], gulp.parallel('mocha'));
});

