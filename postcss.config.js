

module.exports = {
  plugins: [
    require('postcss-import')({
      plugins: [
        require('stylelint')
      ]
    }),
    require('postcss-font-magician')({
      variants: {
        'Raleway': {
          '400': [],
          '500': []
        }
      }
    }),
    require('postcss-preset-env')({
      stage: 2,
      features: {
        customProperties: false,
        calc: false
      },
      browsers: 'last 2 versions'
    }),
    //require('css-mqpacker'),
    //require('cssnano'),
  ]
}