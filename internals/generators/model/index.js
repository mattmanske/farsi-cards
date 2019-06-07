//-----------  Prompts  -----------//

const prompts = [{
  type     : 'input',
  name     : 'name',
  message  : 'What the name of the new model?',
  default  : 'auth',
},{
  type     : 'confirm',
  name     : 'sagas',
  message  : 'Does this model need sagas?',
  default  : true
}]

//-----------  Actions  -----------//

const actions = ({ name, sagas }) => {
  const selectorsTemplate   = './model/templates/selectors.js.hbs'
  const actionsTemplate     = './model/templates/actions.js.hbs'
  const reducerTemplate     = './model/templates/reducer.js.hbs'
  const sagasTemplate       = './model/templates/sagas.js.hbs'
  const apiTemplate         = './model/templates/api.js.hbs'

  const actionsTestTemplate = './model/templates/_actionsTests.js.hbs'
  const reducerTestTemplate = './model/templates/_reducerTests.js.hbs'
  const sagasTestTemplate   = './model/templates/_sagasTests.js.hbs'

  const modelActions = [{
    // Actions File
    type         : 'add',
    path         : '../../src/models/{{lowerCase name}}/actions.js',
    templateFile : actionsTemplate,
    abortOnFail  : true,
  },{
    // Reducer File
    type         : 'add',
    path         : '../../src/models/{{lowerCase name}}/reducer.js',
    templateFile : reducerTemplate,
    abortOnFail  : true,
  },{
    // Selectors File
    type         : 'add',
    path         : '../../src/models/{{lowerCase name}}/selectors.js',
    templateFile : selectorsTemplate,
    abortOnFail  : true,
  },{
    // Actions Test File
    type         : 'add',
    path         : '../../src/models/{{lowerCase name}}/__tests__/actions.js',
    templateFile : actionsTestTemplate,
    abortOnFail  : true,
  },{
    // Reducers Test File
    type         : 'add',
    path         : '../../src/models/{{lowerCase name}}/__tests__/reducers.js',
    templateFile : reducerTestTemplate,
    abortOnFail  : true,
  }]

  const sagaActions = sagas ? [{
    // Sagas File
    type         : 'add',
    path         : '../../src/models/{{lowerCase name}}/sagas.js',
    templateFile : sagasTemplate,
    abortOnFail  : true,
  },{
    // API File
    type         : 'add',
    path         : '../../src/models/{{lowerCase name}}/api.js',
    templateFile : apiTemplate,
    abortOnFail  : true,
  },{
    // Sagas Test File
    type         : 'add',
    path         : '../../src/models/{{lowerCase name}}/_tests_/sagas.js',
    templateFile : sagasTestTemplate,
    abortOnFail  : true,
  }] : []

  return modelActions.concat(sagaActions)
}

//-----------  Exports  -----------//

module.exports = {
  prompts,
  actions,
  description: 'Generate a new redux model.'
}
