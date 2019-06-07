//-----------  Prompts  -----------//

const prompts = [{
  type     : 'input',
  name     : 'name',
  message  : 'What should it be called?',
  default  : 'Button',
}]

//-----------  Actions  -----------//

const actions = ({ type, name, styleguide }) => {
  const indexTemplate     = './container/templates/index.js.hbs'
  const stylesTemplate    = './container/templates/styles.js.hbs'
  const componentTemplate = './container/templates/class.js.hbs'
  const testsTemplate     = './container/templates/test.js.hbs'

  const componentActions = [{
    // Index File
    type         : 'add',
    path         : '../../src/containers/{{properCase name}}/index.js',
    templateFile : indexTemplate,
    abortOnFail  : true,
  },{
    // Component File
    type         : 'add',
    path         : '../../src/containers/{{properCase name}}/{{properCase name}}.js',
    templateFile : componentTemplate,
    abortOnFail  : true,
  },{
    // Component Styles
    type         : 'add',
    path         : '../../src/containers/{{properCase name}}/styles.js',
    templateFile : stylesTemplate,
    abortOnFail  : true,
  },{
    // Component Tests
    type         : 'add',
    path         : '../../src/containers/{{properCase name}}/test.js',
    templateFile : testsTemplate,
    abortOnFail  : true,
  }]

  return componentActions
}

//-----------  Exports  -----------//

module.exports = {
  prompts,
  actions,
  description: 'Generate a new container.'
}
