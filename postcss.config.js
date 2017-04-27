var px2rem = require('postcss-px2rem');
var autoprefixer = require('autoprefixer');
module.exports = {
  plugins: [
    px2rem({remUnit: 75}),
    autoprefixer({
      browsers: '> 5%'
    })
  ]
}