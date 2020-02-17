import babel from 'rollup-plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import external from 'rollup-plugin-peer-deps-external'
import { terser } from 'rollup-plugin-terser'

import packageJSON from './package.json'

const input = './src/index.js'
const minifyExtension = pathToFile => pathToFile.replace(/\.js$/, '.min.js')

const output = [{
  file:      packageJSON.main,
  format:    'cjs',
  sourcemap: true,
}, {
  file:      packageJSON.browser,
  format:    'umd',
  sourcemap: true,
  name:      'libUi',
  globals:   { react: 'React' },
}, {
  file:      packageJSON.module,
  format:    'es',
  sourcemap: true,
  exports:   'named',
}]

const plugins = [
  babel({ exclude: 'node_modules/**' }),
  external(),
  resolve({ extensions: ['.js', '.jsx', '.json'] }),
  commonjs({
    include:      'node_modules/**',
    namedExports: {
      react: [
        'cloneElement',
        'createContext',
        'Component',
        'createElement',
      ],
      'react-dom':  ['render', 'hydrate'],
      'prop-types': ['elementType'],
      'react-is':   [
        'isElement',
        'isValidElementType',
        'ForwardRef',
      ],
    },
  }),
]

export default [
  { input, output, plugins },
  {
    input,
    output:  output.map(({ file, ...output }) => ({ ...output, file: minifyExtension(file) })),
    plugins: [...plugins, terser()],
  },
]
