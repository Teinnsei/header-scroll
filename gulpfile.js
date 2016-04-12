var gulp     = require('gulp');
var uglify   = require('gulp-uglify');
var rename   = require('gulp-rename');
gulp.task('clean', function(done) {
    rimraf('dist', done);
});

gulp.task('default', function() {
    return gulp.src('src/js/header-scroll.js')
        .pipe(gulp.dest('dist/js/'))
        .pipe(rename('header-scroll.min.js'))
        .pipe(uglify({preserveComments:"license"}))
        .pipe(gulp.dest('dist/js/'));
});


