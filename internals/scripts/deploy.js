//-----------  Imports  -----------//

require('shelljs/global')

//-----------  Testing  -----------//

echo('Running tests...')

//-----------  Public Site  -----------//

echo('Building application...')
exec('webpack --config ./internals/webpack/prod.config.js --color')

//-----------  Deployment  -----------//

exec('firebase deploy --only hosting')