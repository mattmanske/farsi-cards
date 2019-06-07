//-----------  Includes  -----------//

const fs   = require('fs')
const path = require('path')

//-----------  Exports  -----------//

module.exports = (plop) => {
  plop.setGenerator('component', require('./component'))
  plop.setGenerator('container', require('./container'))
  plop.setGenerator('model', require('./model'))
  plop.setGenerator('route', require('./route'))
}
