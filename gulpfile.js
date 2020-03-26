const gulp = require("gulp");
const through = require("through2");
const { default: { sync: svgr } } = require('@svgr/core');
const rename = require("gulp-rename");

const svg2reactcomponent = () =>
  through.obj(function(file, encoding, callback) {
    if (file.isNull()) {
      return callback(null, file);
    }

    if (file.isStream()) {
			console.log("is stream")
      this.emit(
        "error",
        new Error("Streams not supported!")
      );
    }
    
    if (file.isBuffer()) {
      const svg = file.contents.toString()
      const component = svgr(svg)
      const buffer = Buffer.from(component)
      file.contents = buffer
      callback(null, file)
    }
  });


gulp.task("default", () => gulp
  .src("ISWA2010.svg.min/**/*.svg")
  .pipe(svg2reactcomponent())
  .pipe(rename({ extname: ".jsx" }))
  .pipe(gulp.dest("ISWA2010.jsx"))
);
