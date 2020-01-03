const gulp = require('gulp');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const minify = require("gulp-minify");
const del = require('del');

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

gulp.task('styles', () => {
    return gulp.src('scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(paths.styles.dest));
});

gulp.task('scripts', () => {
    return gulp.src([paths.scripts.src + 'main.js', `!${paths.scripts.src}*.min.js`])
        .pipe(minify({
            ext:{
                src:'-debug.js',
                min:'.min.js'
            },
            noSource: true}))
        .pipe(gulp.dest(paths.scripts.dest))
});

gulp.task('clean', () => {
    return del([
        'css/main.css',
    ]);
});

gulp.task('watch', () => {
    gulp.watch(paths.styles.src + '**/*.scss', (done) => {
        gulp.series(['clean', 'styles'])(done);
    });
    gulp.watch([paths.scripts.src + 'main.js', `!${paths.scripts.src}*.min.js`], (done) => {
        gulp.series(['scripts'])(done);
    });
});

gulp.task('default', gulp.series(['clean', 'styles', 'scripts']));