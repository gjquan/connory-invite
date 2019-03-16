const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');

gulp.task('minify', () => {
  return gulp.src('src/*.html')
    .pipe(htmlmin({
        collapseWhitespace: false,
        minifyCSS: false,
        removeComments: true
    }))
    .pipe(gulp.dest('dist'));
});
