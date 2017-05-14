import gulp from 'gulp'
import gutil from 'gulp-util'

// gulp.task()
gulp.task('beep', () => gutil.beep())
gulp.task('hola', () => gutil.log('Hola'))
gulp.task('chau', ['beep'], () => gutil.log('Chau'))

gulp.task('default', ['hola', 'chau'])


