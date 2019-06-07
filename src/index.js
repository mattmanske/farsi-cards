//-----------  Imports  -----------//

import 'file-loader?name=[name].[ext]!assets/favicon.ico'

import { appUrl, appRoot, appDesc, appTitle } from 'utilities/constants'

//-----------  Defintions  -----------//

const keywords = (appTitle + ' ' + appDesc).replace(/ /g, ',').toLowerCase()

//-----------  HTML Template  -----------//

export default (html, meta, assets, stylesheets) => {
  let scripts = ''

  if (typeof assets === 'object'){
    assets.filter(val => val.match(/\.js$/)).forEach(src => {
      scripts += `<script src="${appUrl}/${src}" async></script>`
    })
  }

  const metaData = meta ? `
    ${meta.title.toString()}
    ${meta.meta.toString()}
    ${meta.link.toString()}
  ` : `
    <title>${appTitle} | ${appDesc}</title>
    <meta name="description" content="${appDesc}">
  `

  return `
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <link rel="icon" href="${appUrl}/favicon.ico" type="image/x-icon" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, target-densityDpi=device-dpi">

        ${metaData || ''}
        <meta name="keywords" content="${keywords}">

        ${stylesheets || ''}
        ${scripts || ''}
      </head>

      <body>
        <noscript>If you're seeing this message, that means <strong>JavaScript has been disabled on your browser</strong>, please <strong>enable JS</strong> to make this app work.</noscript>
        <div id="${appRoot}">${(typeof html === 'string') ? html : ''}</div>
        <div id="${appRoot}-modal"></div>
      </body>
    </html>
  `
}
