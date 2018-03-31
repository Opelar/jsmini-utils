const gulp = require("gulp");
const rollup = require("gulp-rollup");
const gulpSourcemaps = require("gulp-sourcemaps");
const watch = require("gulp-watch");

gulp.task("bundle", () => {
  gulp
    .src("./src/utils/*.js")
    .pipe(sourcemaps.init())
    .pipe(rollup({ input: "./src/index.js" }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("./dist"));
});

gulp.task("watch", () => {
  gulp.watch("./src/utils/*.js", ["bundle"]);
  gulp.watch("./src/index.js", ["bundle"]);
});

gulp.task("default", ["watch", "bundle"]);
