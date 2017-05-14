import gulp from 'gulp'
import gutil from 'gulp-util'
import concat from 'gulp-concat'
import del from 'del'

// *************
// gulp.task() simples, con tareas pre-existentes y dependencias
// *************

gulp.task('beep', () => gutil.beep())
gulp.task('hola', () => gutil.log('Hola'))
gulp.task('chau', ['beep'], () => gutil.log('Chau'))

// *************
// gulp.task() con tareas propias
// *************

gulp.task('hola-custom', done => {
  console.log('Hola custom !')
  done()
})

// *************
// src / dest: manipulando archivos
// *************

gulp.task('txt:clean', () => del(['target']))

gulp.task('txt:copy', () => {
  return gulp.src('src/*.txt').pipe(gulp.dest('target'));
})

gulp.task('txt:copy-merged', () => 
  gulp.src('src/*.txt')
    .pipe(concat('all.txt'))
    .pipe(gulp.dest('target'))
)

gulp.task('default', ['hola', 'chau'])


