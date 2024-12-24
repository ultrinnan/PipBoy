import gulp from 'gulp';
import gulpSass from 'gulp-sass'; // Import gulp-sass
import * as dartSass from 'sass'; // Import Dart Sass as a namespace
import cleanCSS from 'gulp-clean-css';
import rename from 'gulp-rename';
import minify from 'gulp-minify';
import { deleteAsync } from 'del';

const sass = gulpSass(dartSass); // Explicitly set the compiler

const paths = {
  styles: {
    src: 'scss/**/*.scss',
    dest: 'css/',
  },
  scripts: {
    src: 'js/main.js',
    dest: 'js/',
  },
};

// Clean task
const clean = () => deleteAsync(['css/main.css']);

// Styles task
const styles = () => {
  return gulp.src(paths.styles.src)
  .pipe(sass().on('error', sass.logError)) // Updated Sass setup
  .pipe(cleanCSS())
  .pipe(rename({ suffix: '.min' }))
  .pipe(gulp.dest(paths.styles.dest));
};

// Scripts task
const scripts = () => {
  return gulp.src([paths.scripts.src, `!${paths.scripts.dest}*.min.js`])
  .pipe(minify({
    ext: {
      src: '-debug.js',
      min: '.min.js',
    },
    noSource: true,
  }))
  .pipe(gulp.dest(paths.scripts.dest));
};

// Watch task
const watchFiles = () => {
  gulp.watch('scss/**/*.scss', gulp.series(clean, styles));
  gulp.watch([paths.scripts.src, `!${paths.scripts.dest}*.min.js`], scripts);
};

// Define complex tasks
const build = gulp.series(clean, gulp.parallel(styles, scripts));
const watch = gulp.series(build, watchFiles);

// Export tasks
export { clean, styles, scripts, watch, build };
export default build;
