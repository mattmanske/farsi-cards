//-----------  Imports  -----------//

const path               = require('path')
const webpack            = require('webpack')
const DotenvPlugin       = require('webpack-dotenv-plugin')
const UglifyJsPlugin     = require('uglifyjs-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const StaticSitePlugin   = require('static-site-generator-webpack-plugin')

const shared = require('./shared.config.js')

//-----------  Helpers  -----------//

const staticPaths = [
  '/index.html'
]

//-----------  Configuration  -----------//

module.exports = (env, args) => (Object.assign(shared, {
  mode   : 'production',
  entry  : path.join(process.cwd(), 'src/server.js'),
  output : {
    publicPath    : '/',
    libraryTarget : 'umd',
    globalObject  : 'this',
    filename      : 'scripts.js',
    path          : path.resolve(process.cwd(), 'dist'),
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          beautify  : false,
          compress  : true,
          comments  : false,
          sourceMap : true,
          mangle: {
            keep_fnames: true
          },
          compress: {
            warnings: false
          }
        }
      })
    ]
  },
  plugins : [
    new CleanWebpackPlugin(
      [path.resolve(process.cwd(), 'dist')],
      { allowExternal: true }
    ),
    new webpack.LoaderOptionsPlugin({
      minimize : true,
      debug    : false
    }),
    new DotenvPlugin({
      sample : './.env.sample',
      path   : './.env'
    }),
    new StaticSitePlugin({
      paths: staticPaths
    })
  ],
}))
