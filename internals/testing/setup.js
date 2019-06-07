//-----------  Imports  -----------//

require('raf/polyfill')
require('babel-polyfill')
require('jsdom-global/register')

const configure = require('enzyme').configure
const Adapter   = require('enzyme-adapter-react-16')

//-----------  Definitions  -----------//

configure({ adapter: new Adapter() })

//-----------  Polyfills  -----------//

window.requestAnimationFrame = function(callback){
  setTimeout(callback, 0)
  return 0
}