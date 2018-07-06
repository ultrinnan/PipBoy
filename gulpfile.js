const gulp = require('gulp');
const sass = require('gulp-ruby-sass');
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const autoprefixer = require('gulp-autoprefixer');
const rename = require('gulp-rename');

const paths = {
    styles: {
        src: 'scss/',
        dest: 'css/'
    },
    scripts: {
        src: 'js/',
        dest: 'js/'
    }
};

/**
 *  Compile styles
 *  include general libs
 */
function styles() {
    return sass(paths.styles.src + 'main.scss', {style: 'compressed'})
        .on('error', (err) => {
            console.error('Error', err.message);
        })
        .pipe(autoprefixer('last 2 versions'))
        .pipe(gulp.dest(paths.styles.dest))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(cleanCSS())
        .pipe(gulp.dest(paths.styles.dest))
}

/**
 *  Minify and concat all JS files
 *  include general libs
 */
function scripts() {
    return gulp.src([paths.scripts.src + 'main.js', `!${paths.scripts.src}*.min.js`])
        .pipe(concat('main.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(paths.scripts.dest))
}

/**
 *  Watch changes
 */
function watch() {
    gulp.watch(paths.styles.src + '**/*.scss', styles);
    gulp.watch([paths.scripts.src + 'main.js', `!${paths.scripts.src}*.min.js`], gulp.series(scripts));
}

let build = gulp.series(gulp.parallel(styles, scripts));

/*
 * Define build task to build our scripts and styles for Production
 */
gulp.task('build', build);

/*
 * Define default task that can be called by just running `gulp` from cli
 */
gulp.task('default', gulp.series(build, watch));
