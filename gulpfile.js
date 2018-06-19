var gulp = require("gulp");
var babel = require("gulp-babel");
var rename = require("gulp-rename");
var uglify = require('gulp-uglify');

gulp.task("default", function() {
  gulp.src("src/app.js")
    .pipe(babel())
    .pipe(rename('followcursor.js'))
    .pipe(gulp.dest("dist"));

  gulp.src('dist/followCursor.js')
    .pipe(uglify())
    .pipe(rename('followcursor-min.js'))
    .pipe(gulp.dest('dist'))
});