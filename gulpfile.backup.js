const svgo = require("gulp-svgo");
const through = require("through2");
const svgson = require("svgson");
const rename = require("gulp-rename");

const svg2json = () =>
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
      const json = svgson.parseSync(svg)
      const buffer = Buffer.from(JSON.stringify(json))
      file.contents = buffer
			callback(null, file)
    }
  });

gulp.task("minify", function() {
  return gulp
    .src("ISWA2010.svg/**/*.svg")
    .pipe(svgo())
    .pipe(rename({ extname: ".min.svg" }))
    .pipe(gulp.dest("ISWA2010.svg.min"));
});

gulp.task("json", function() {
  return gulp
    .src("ISWA2010.svg/**/*.svg")
    .pipe(svgo())
    .pipe(svg2json())
    .pipe(rename({ extname: ".json" }))
    .pipe(gulp.dest("ISWA2010.json"));
});

gulp.task("onepercent", function() {
  return gulp
    .src("ISWA2010.json/**/*.json")
    .pipe(through.obj((file, enc, cb) => {
      const r = Math.random()
      if ( r < 0.01) {
        if (file.isStream()) {
          file.contents = file.contents.close()
        }
        cb(null, file)
      } else {
        cb(null, null)
      }
    }))
    .pipe(gulp.dest("ISWA2010.1pc"));
});
