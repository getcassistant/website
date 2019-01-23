let mix = require('laravel-mix')

mix.setPublicPath('public')

mix.sass('src/scss/style.scss', 'public/css')
  .js('src/js/main.js', 'public/js')
  .browserSync('cassistant-front.wip')
