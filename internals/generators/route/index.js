//-----------  Prompts  -----------//

const prompts = [{
  type    : 'input',
  name    : 'path',
  message : 'Enter the path:',
  default : '/'
},{
  type    : 'input',
  name    : 'name',
  message : 'What should the component be called?',
  default : 'IndexRoute'
}]

//-----------  Actions  -----------//

const actions = ({ type, name }) => {
  const indexTemplate     = './route/templates/index.js.hbs'
  const stylesTemplate    = './route/templates/styles.js.hbs'
  const componentTemplate = './route/templates/component.js.hbs'
  const testsTemplate     = './route/templates/test.js.hbs'

  return [{
    // Index File
    type         : 'add',
    path         : '../../src/routes/{{properCase name}}/index.js',
    templateFile : indexTemplate,
    abortOnFail  : true,
  },{
    // Component File
    type         : 'add',
    path         : '../../src/routes/{{properCase name}}/{{properCase name}}.js',
    templateFile : componentTemplate,
    abortOnFail  : true,
  },{
    // Component Tests
    type         : 'add',
    path         : '../../src/routes/{{properCase name}}/test.js',
    templateFile : testsTemplate,
    abortOnFail  : true,
  },{
    // Component Styles
    type         : 'add',
    path         : '../../src/routes/{{properCase name}}/styles.js',
    templateFile : stylesTemplate,
    abortOnFail  : true,
  }]
}

//-----------  Exports  -----------//

module.exports = {
  prompts,
  actions,
  description: 'Generate a new route.'
}
