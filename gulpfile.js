const gulp = require("gulp"),
    watch = require("gulp-watch"),
    postcss = require("gulp-postcss"),
    autoprefixer = require("autoprefixer"),
    cssvars = require("postcss-simple-vars"),
    nested = require("postcss-nested");

gulp.task("default", function(){
    console.log("this is the default task")
});

gulp.task("html", function () {
   console.log("Imagine something usefull being done to the html");
});

gulp.task("css", function () {
   return gulp.src("./app/assets/styles/styles.css")
       .pipe(postcss([nested, cssvars, autoprefixer]))
       .pipe(gulp.dest("./app/temp/styles"));
});

gulp.task("watch", function () {
   watch("./app/index.html", function () {
      gulp.start('html');
   });
   watch("./app//assets/styles/**/*.css", function () {
      gulp.start("css");
   });
});