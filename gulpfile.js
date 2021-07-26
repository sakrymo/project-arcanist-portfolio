const gulp = require('gulp')
const rename = require('gulp-rename')
// pug -> html
const pug = require('gulp-pug')
// scss -> css
const sass = require('gulp-sass')(require('sass'))
const postcss = require('gulp-postcss')
const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')
// js -> js-min
const terser = require('gulp-terser')
const concat = require('gulp-concat')
// img -> png/jpg/ -> webp/png/jpg
const sharpResponsive = require('gulp-sharp-responsive')
const imagemin = require('gulp-imagemin')
// browserSync
const browserSync = require('browser-sync').create()

/*
888b. 888b. .d88b. Yb        dP .d88b. 8888 888b. .d88b. Yb  dP 8b  8 .d88b
8wwwP 8  .8 8P  Y8  Yb  db  dP  YPwww. 8www 8  .8 YPwww.  YbdP  8Ybm8 8P
8   b 8wwK' 8b  d8   YbdPYbdP       d8 8    8wwK'     d8   YP   8  "8 8b
888P' 8  Yb `Y88P'    YP  YP    `Y88P' 8888 8  Yb `Y88P'   88   8   8 `Y88P
*/

function browsersyncServe (cb) {
  browserSync.init({
    server: {
      baseDir: 'public/'
    }
  })
  cb()
}

function watch () {
  gulp.watch('public/*.html', browserSync.reload)
  gulp.watch('src/scss/**/*.scss', css)
  gulp.watch('src/pug/**/*.pug', html)
  gulp.watch('src/js/**/*.js', js)
  gulp.watch(['src/img/**/*', '!src/img/sharp/**/*', '!src/img/sharp'], otherImages)
  gulp.watch('src/img/sharp/**/*.jpg', jpg)
  gulp.watch('src/img/sharp/**/*.png', png)
}
/*
.d88b .d88b. .d88b.
8P    YPwww. YPwww.
8b        d8     d8
`Y88P `Y88P' `Y88P'
*/

function css () {
  // PostCSS plugins
  const plugins = [
    autoprefixer(),
    cssnano({
      preset: 'advanced',
      discardComments: { removeAll: true }
    })
  ]

  return gulp
    .src('src/scss/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('public/css'))
    .pipe(postcss(plugins))
    .pipe(rename(path => { path.extname = '.min.css' }))
    .pipe(gulp.dest('public/css'))
    .pipe(browserSync.stream())
}

/*
8   8 88888 8b   d8 8
8www8   8   8YbmdP8 8
8   8   8   8  "  8 8
8   8   8   8     8 8888
*/

function html () {
  return gulp
    .src('src/pug/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('public'))
    .pipe(browserSync.stream())
}

/*
 8888    db    Yb    dP    db    .d88b. .d88b 888b. 888 888b. 88888
   8    dPYb    Yb  dP    dPYb   YPwww. 8P    8  .8  8  8  .8   8
w  8   dPwwYb    YbdP    dPwwYb      d8 8b    8wwK'  8  8wwP'   8
`Yw"  dP    Yb    YP    dP    Yb `Y88P' `Y88P 8  Yb 888 8       8
*/

function js () {
  return gulp
    .src([
      "src/js/themes.js",
      "src/js/dom-to-image.min.js",
      "src/js/main.js",
      "src/js/smooth-scroll.js",
    ])
    .pipe(concat("main.js"))
    .pipe(gulp.dest("public/js"))
    .pipe(terser({ format: { comments: false } }))
    .pipe(
      rename((path) => {
        path.extname = ".min.js";
      })
    )
    .pipe(gulp.dest("public/js"))
    .pipe(browserSync.stream());
}

/*
888 8b   d8    db    .d88b  8888 .d88b.
 8  8YbmdP8   dPYb   8P www 8www YPwww.
 8  8  "  8  dPwwYb  8b  d8 8        d8
888 8     8 dP    Yb `Y88P' 8888 `Y88P'

*/

const imgSrc = 'src/img/sharp/**/'

const xs = 768
const sm = 1024
const md = 1200
const lg = 1800

const calcWidth = (metadata, size) => {
  return (metadata.width >= metadata.height) ? size : Math.round(size / 1.5)
}

/*
 8888 888b. 8888 .d88b
   8  8  .8 8www 8P www
w  8  8wwP' 8    8b  d8
`Yw"  8     8888 `Y88P'
*/
const jpgConfig = { quality: 80, mozjpeg: true, chromaSubsampling: '4:4:4' }
const webpConfig = { reductionEffort: 6, quality: 80, smartSubsample: true }

function jpg () {
  return gulp
    .src(imgSrc + '*.{jpg,jpeg}')
    .pipe(sharpResponsive({
      formats: [
        // jpg -> webp
        {
          width: metadata => calcWidth(metadata, xs),
          format: 'webp',
          rename: { suffix: '-xs' },
          webpOptions: webpConfig
        },
        {
          width: metadata => calcWidth(metadata, sm),
          format: 'webp',
          rename: { suffix: '-sm' },
          webpOptions: webpConfig
        },
        {
          width: metadata => calcWidth(metadata, md),
          format: 'webp',
          rename: { suffix: '-md' },
          webpOptions: webpConfig
        },
        {
          width: metadata => calcWidth(metadata, lg),
          format: 'webp',
          rename: { suffix: '-lg' },
          webpOptions: webpConfig
        },
        // jpg -> jpg
        {
          width: metadata => calcWidth(metadata, xs),
          format: 'jpeg',
          rename: { suffix: '-xs' },
          jpegOptions: jpgConfig
        },
        {
          width: metadata => calcWidth(metadata, sm),
          format: 'jpeg',
          rename: { suffix: '-sm' },
          jpegOptions: jpgConfig
        },
        {
          width: metadata => calcWidth(metadata, md),
          format: 'jpeg',
          rename: { suffix: '-md' },
          jpegOptions: jpgConfig
        },
        {
          width: metadata => calcWidth(metadata, lg),
          format: 'jpeg',
          rename: { suffix: '-lg' },
          jpegOptions: jpgConfig
        }
      ]
    }))
    .pipe(gulp.dest('public/img/auto'))
}

/*
888b. 8b  8 .d88b
8  .8 8Ybm8 8P www
8wwP' 8  "8 8b  d8
8     8   8 `Y88P'
*/
const pngConfig = { compressionLevel: 7, palette: true }
const webpLosslessConfig = { lossless: true, quality: 70 }
function png () {
  return gulp
    .src(imgSrc + '*.png')
    .pipe(sharpResponsive({
      formats: [
        // png -> webp
        {
          width: metadata => calcWidth(metadata, xs),
          format: 'webp',
          rename: { suffix: '-xs' },
          webpOptions: webpLosslessConfig
        },
        {
          width: metadata => calcWidth(metadata, sm),
          format: 'webp',
          rename: { suffix: '-sm' },
          webpOptions: webpLosslessConfig
        },
        {
          width: metadata => calcWidth(metadata, md),
          format: 'webp',
          rename: { suffix: '-md' },
          webpOptions: webpLosslessConfig
        },
        {
          width: metadata => calcWidth(metadata, lg),
          format: 'webp',
          rename: { suffix: '-lg' },
          webpOptions: webpLosslessConfig
        },
        // png -> png
        {
          width: metadata => calcWidth(metadata, xs),
          format: 'png',
          rename: { suffix: '-xs' },
          pngOptions: pngConfig
        },
        {
          width: metadata => calcWidth(metadata, sm),
          format: 'png',
          rename: { suffix: '-sm' },
          pngOptions: pngConfig
        },
        {
          width: metadata => calcWidth(metadata, md),
          format: 'png',
          rename: { suffix: '-md' },
          pngOptions: pngConfig
        },
        {
          width: metadata => calcWidth(metadata, lg),
          format: 'png',
          rename: { suffix: '-lg' },
          pngOptions: pngConfig
        }
      ]
    }))
    .pipe(gulp.dest('public/img/auto'))
}

function otherImages () {
  return gulp
    .src(['src/img/**/*', '!src/img/sharp/**/*', '!src/img/sharp'])
    .pipe(imagemin())
    .pipe(gulp.dest('public/img/'))
}

function img () { gulp.parallel([jpg, png]) }

exports.css = css
exports.html = html
exports.js = js

exports.jpg = jpg
exports.png = png
exports.img = img
exports.otherImg = otherImages
exports.watch = gulp.parallel([browsersyncServe, watch])

exports.default = gulp.parallel([browsersyncServe, css, html, js, png, jpg, otherImages])
