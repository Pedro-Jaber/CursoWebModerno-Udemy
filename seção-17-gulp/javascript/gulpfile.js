const gulp = require("gulp");
const { series, parallel } = require("gulp");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const babel = require("gulp-babel");

function transformacaoJS(cb) {
  return gulp
    .src("src/**/*.js")
    .pipe(
      babel({
        comments: false,
        presets: ["env"],
      })
    ) // converte o código para ser o mais compativel possível
    .pipe(uglify()) // Minifica os códigos
    .on("error", (err) => console.log(err))
    .pipe(concat("codigo.min.js")) // Juntas os arquivos em apenas um
    .pipe(gulp.dest("build")); // Coloca o arquivo na pasta 'build'

  // return cb();
}

function fim(cb) {
  console.log("fim!!");
  return cb();
}

// exports.default = series(transformacaoJS);
exports.default = series(transformacaoJS, fim);
// exports.default = parallel(transformacaoJS, fim);
