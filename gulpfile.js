const gulp = require("gulp");
const rollup = require("rollup");
const watch = require("gulp-watch");
const babel = require("rollup-plugin-babel");

gulp.task("build", async function() {
  const bundle = await rollup.rollup({
    input: "./src/index.js",
    plugins: [babel()]
  });

  await bundle.write({
    file: "./dist/utils.js",
    format: "umd",
    name: "utils",
    sourcemap: true
  });
});

watch("./src/utils/*.js", ["build"]);
watch("./src/index.js", ["build"]);

gulp.task("default", ["build"]);
