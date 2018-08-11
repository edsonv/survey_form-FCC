const HtmlWebpackPlugin = require('html-webpack-plugin')
  const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
    const path = require('path')
//const webpack = require('webpack')
const WriteFilePlugin = require('write-file-webpack-plugin')
// const devMode = process.env.NODE_ENV !== 'production'

module.exports = {
  mode: 'development', // mode: 'production',
  entry:path.resolve(__dirname, 'src/js/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js'
  },
  devServer: {
    //contentBase: path.join(__dirname,'src'),
    //watchContentBase: true,
    //compress: true,
    //hot: true,
    //open: true,
    //overlay: true,
    port:9000,
  },
  module: {
    rules: [
    {
      test: /\.html$/,
      use:[
      {
        loader: 'html-loader',
        options: { minimize: false }
      }
      ]
    },
    {
      test: /\.css$/,
      use: [
        // devMode ? 'style-loader' : MiniCSSExtractPlugin.loader,
        //'style-loader',
        MiniCSSExtractPlugin.loader,
        'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            config: {
              path: './'
            }
          }
        }
        ]
      }
      ]
    },
    plugins: [
    //new WriteFilePlugin({
      //test: /^(?!.*(hot)).*/,
    //}),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html')
    }),
    new MiniCSSExtractPlugin({
      // filename: devMode ? 'css/[name].css' : 'css/[name].[hash].css',
      // chunkFilename: devMode ? '[id].css' : '[id].[hash].css'
      filename: 'css/[name].css',
      chunkFilename: '[id].css'
    }),
    //new webpack.HotModuleReplacementPlugin(),
    ]
  }