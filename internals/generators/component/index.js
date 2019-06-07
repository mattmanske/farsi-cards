//-----------  Prompts  -----------//

const prompts = [{
  type    : 'list',
  name    : 'type',
  message : 'Select the type of component',
  default : 'Stateless Function',
  choices : () => ['Stateless Function', 'ES6 Class'],
},{
  type     : 'input',
  name     : 'name',
  message  : 'What should it be called?',
  default  : 'Button',
}]

//-----------  Actions  -----------//

const actions = ({ type, name, styleguide }) => {
  const indexTemplate     = './component/templates/index.js.hbs'
  const stylesTemplate    = './component/templates/styles.js.hbs'
  const componentTemplate = ('Stateless Function' == type)
    ? './component/templates/function.js.hbs'
    : './component/templates/class.js.hbs'
  const testsTemplate     = './component/templates/test.js.hbs'

  const componentActions = [{
    // Index File
    type         : 'add',
    path         : '../../src/components/{{properCase name}}/index.js',
    templateFile : indexTemplate,
    abortOnFail  : true,
  },{
    // Component File
    type         : 'add',
    path         : '../../src/components/{{properCase name}}/{{properCase name}}.js',
    templateFile : componentTemplate,
    abortOnFail  : true,
  },{
    // Component Styles
    type         : 'add',
    path         : '../../src/components/{{properCase name}}/styles.js',
    templateFile : stylesTemplate,
    abortOnFail  : true,
  },{
    // Component Tests
    type         : 'add',
    path         : '../../src/components/{{properCase name}}/test.js',
    templateFile : testsTemplate,
    abortOnFail  : true,
  }]

  return componentActions
}

//-----------  Exports  -----------//

module.exports = {
  prompts,
  actions,
  description: 'Generate a new component.'
}
