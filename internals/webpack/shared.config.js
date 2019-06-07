//-----------  Imports  -----------//

const path = require('path')

//-----------  Configuration  -----------//

module.exports = {
  context : process.cwd(),
  target  : 'web',
  resolve : {
    modules    : ['src', 'node_modules'],
    extensions : ['.js', '.jsx']
  },
  module: {
    rules: [{
      test    : /\.(js|jsx)?$/,
      exclude : path.resolve(process.cwd(), 'node_modules'),
      loaders : ['babel-loader'],
    },{
      test    : /\.css$/,
      include : path.resolve(process.cwd(), 'node_modules'),
      loaders : ['style-loader', 'css-loader'],
    },{
      test    : /\.yml/,
      loaders : ['json-loader', 'yaml-loader']
    },{
      test    : /\.(jpg|png|gif)$/,
      include : path.resolve(process.cwd(), 'src/assets'),
      loaders : ['url-loader?limit=15000']
    },{
      test    : /\.svg$/,
      include : path.resolve(process.cwd(), 'src/assets'),
      loaders : ['svg-react-loader'],
    }]
  }
}
