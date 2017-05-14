import gulp from 'gulp'
import gutil from 'gulp-util'
import concat from 'gulp-concat'
import del from 'del'
import gzip from 'gulp-gzip'
import tar from 'gulp-tar'
import babel from 'gulp-babel'
import uglify from 'gulp-uglify'
import minify from 'gulp-minify'

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

gulp.task('txt:compress:each', () => {
  gulp.src('src/*.txt')
    .pipe(gzip())
    .pipe(gulp.dest('target'))
})

gulp.task('txt:compress:tar', () => {
  gulp.src('src/*.txt')
    .pipe(tar('txts.tar'))
    .pipe(gzip())
    .pipe(gulp.dest('target'))
})

//
// babel
//

gulp.task('transpile', () => {
  gulp.src('src/**/*.js')
    .pipe(babel())
    .pipe(uglify())
    .pipe(minify())
    .pipe(gulp.dest('target'))
})


gulp.task('default', ['hola', 'chau'])


