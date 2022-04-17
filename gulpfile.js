const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const imagemin = require("gulp-imagemin");
const webpack = require('webpack-stream');
const browserSyncServer = require("browser-sync").create();

const argv = require('yargs').argv;

/**
 * Config
 */
const useImageOptim = true; // If build on school machine fail, change to false

const isProduction = (argv.production === undefined) ? false : true;
const config = {};
if (isProduction) {
    config.env = 'production';
    config.sassOutputStyle = 'compressed';
} else {
    config.env = 'development';
    config.sassOutputStyle = 'expanded';
}

/**
 * Styles
 */
const styles = (done) => {
    gulp.src( './src/styles/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: config.sassOutputStyle }).on('error', sass.logError))
        .pipe(postcss([
            autoprefixer({ overrideBrowserslist: ['last 2 versions'] })
        ]))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest( './dist/styles/'))
        .pipe(browserSyncServer.stream());

    done();
}

/**
 * JS - ES6
 */
const javascript = (done) => {
    gulp.src('./src/scripts/main.js')
      .pipe(sourcemaps.init())
      .pipe(
        webpack({
          mode: config.env,
          devtool: 'source-map',
        })
      )
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest( './dist/scripts/'))
      .pipe(browserSyncServer.stream());

      done();
}

/**
 * HTML
 */
const html = (done) => {
    gulp.src('./src/*.html')
        .pipe(gulp.dest( './dist/'));

    done();
}

/**
 * Watch
 */
const watchFiles = (done) => {
    gulp.watch("./src/styles/**/*.scss", styles);
    gulp.watch("./src/scripts/**/*.js", javascript);
    gulp.watch([
        "./src/assets/images/**/*.jpg",
        "./src/assets/images/**/*.png",
        "./src/assets/images/**/*.gif",
        "./src/assets/images/**/*.svg"
    ], compressImages);
    gulp.watch("./src/*.html", gulp.series(html, browserReload));

    done();
}

/**
 * BrowserSync
 */
const browserSync = (done) => {
    browserSyncServer.init({
        server: {
          baseDir: "./dist"
        },
        port: 3000
      });
      done();
}

const browserReload = (done) => {
    browserSyncServer.reload();
    done();
}

/**
 * Images
 */
const compressImages = (done) => {
    let g = gulp.src([
        "./src/assets/images/**/*.jpg",
        "./src/assets/images/**/*.png",
        "./src/assets/images/**/*.gif",
        "./src/assets/images/**/*.svg"
    ])

    if (useImageOptim) {
        g = g.pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}]
        }))
    }

    g.pipe(gulp.dest('./dist/assets/images/'))

    done()
}

const build = gulp.series(html, styles, javascript, compressImages);
const watch = gulp.series(build, gulp.parallel(watchFiles, browserSync));
const compress = gulp.series(compressImages);

exports.watch = watch;
exports.compress = compress;
exports.default = build;
