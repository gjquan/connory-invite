const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');

gulp.task('minify', () => {
  return gulp.src('src/*.html')
    .pipe(htmlmin({
    	collapseWhitespace: true,
    	minifyCSS: true,
        minifyJS: true,
        removeComments: true
    }))
    .pipe(gulp.dest('dist'));
});
