//-----------  Imports  -----------//

const path              = require('path')
const webpack           = require('webpack')
const DotenvPlugin      = require('webpack-dotenv-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const shared = require('./shared.config.js')

//-----------  Configuration  -----------//

module.exports = (env, args) => (Object.assign(shared, {
  mode    : 'development',
  devtool : 'eval',
  entry   : [
    'react-hot-loader/patch',
    path.join(process.cwd(), 'src/app.js')
  ],
  output  : {
    publicPath : '/',
    filename   : 'scripts.js',
    path       : path.resolve(process.cwd(), 'tmp'),
  },
  plugins : [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new DotenvPlugin({
      sample : './.env.sample',
      path   : './.env'
    }),
    new HtmlWebpackPlugin({
      inject   : true,
      template : path.resolve(process.cwd(), 'src/index.js'),
    }),
  ],
  devServer: {
    contentBase        : './tmp',
    hot                : true,
    hotOnly            : true,
    host               : 'localhost',
    port               : 3000,
    inline             : true,
    historyApiFallback : true
  }
}))
