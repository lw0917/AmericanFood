var gulp=require('gulp');
var sass=require('gulp-sass');
var server=require('gulp-webserver');

    //编译sass
    gulp.task('css',function(){
        return  gulp.src('./src/sass/*.scss')
                .pipe(sass())
                .pipe(gulp.dest('./src/css'))
    })
    //监听sass
    gulp.task('watch',function(){
        return gulp.watch('./src/sass/*.scss',gulp.series('css'))
    })
    //起服务
    gulp.task('dev',function(){
        return gulp.src('./src')
               .pipe(server({
                   port:9090,
                   proxies:[
                       {
                           source:'/api/icon',target:'http://127.0.0.1/api/icon'
                       }
                   ]
               }))
    })
    gulp.task('default',gulp.series('css','dev','watch'));
    