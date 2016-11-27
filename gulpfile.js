const gulp = require('gulp');
const eslint = require('gulp-eslint');
const less = require('gulp-less');
const gulpStylelint = require('gulp-stylelint');
const path = require('path');

gulp.task('lint-javascript', () =>
  gulp.src(['**/*.js'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError()));

gulp.task('lint-less', () =>
  gulp.src('src/**/*.less')
    .pipe(gulpStylelint({
      reporters: [
        { formatter: 'string', console: true },
      ],
    })));

gulp.task('less', () =>
  gulp.src('./assets/**/*.less')
    .pipe(less({
      paths: [path.join(__dirname, 'less', 'includes')],
    }))
    .pipe(gulp.dest('./public/css')));


gulp.task('lint', ['lint-less', 'lint-javascript']);

gulp.task('default', ['lint', 'less']);
