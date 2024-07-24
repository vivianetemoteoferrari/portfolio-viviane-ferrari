const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

gulp.task('sass', function () {
    return gulp.src('path/to/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('path/to/css'));
});

gulp.task('watch', function () {
    gulp.watch('path/to/**/*.scss', gulp.series('sass'));
});

gulp.task('default', gulp.series('sass', 'watch'));
