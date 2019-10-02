const actions = [{
  type:         'add',
  path:         'src/{{ type }}/{{ pascalCase name }}/index.js',
  templateFile: '.plop/Component/index.js',
}, {
  type:         'add',
  path:         'src/{{ type }}/{{ pascalCase name }}/{{ pascalCase name }}.jsx',
  templateFile: '.plop/Component/Component.jsx',
}, {
  type:         'add',
  path:         'src/{{ type }}/{{ pascalCase name }}/{{ pascalCase name }}.test.jsx',
  templateFile: '.plop/Component/Component.test.jsx',
}, {
  type:         'add',
  path:         'src/{{ type }}/{{ pascalCase name }}/{{ pascalCase name }}.stories.jsx',
  templateFile: '.plop/Component/Component.stories.jsx',
}, {
  type:         'add',
  path:         'src/{{ type }}/{{ pascalCase name }}/README.md',
  templateFile: '.plop/Component/README.md',
}, {
  type:     'modify',
  pattern:  /$/,
  path:     'src/{{ type }}/index.js',
  template: `export { default as {{ pascalCase name }} } from './{{ pascalCase name }}'
`,
}, {
  type:     'modify',
  pattern:  /$/,
  path:     'src/index.js',
  template: `export { {{ pascalCase name }} } from './{{ type }}'
`,
}]

module.exports = plop => {
  plop.setGenerator('component', {
    description: 'create a new atomic component',
    prompts:     [{
      type:    'list',
      name:    'type',
      message: 'Type of component',
      choices: [
        { name: 'Atom', value: 'Atoms' },
        { name: 'Molecule', value: 'Molecules' },
        { name: 'Organism', value: 'Organisms' },
        { name: 'Template', value: 'Templates' },
      ],
    }, {
      type:    'input',
      name:    'name',
      message: 'The name of the component',
    }],
    actions,
  })
}
