var gulp = require('gulp'),
    gutil = require('gulp-util'),
    coffee = require('gulp-coffee');

var coffeeSources = ['components/coffee/*.coffe']    

gulp.task('coffee', function() {
   gutil.src(coffeeSources)
      .pipe(coffee({bare: true})
        .on('error', gutil.log))
      .pipe(gulp.dest('components/scripts'))  
});