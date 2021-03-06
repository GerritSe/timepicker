import babel from 'rollup-plugin-babel'
import pkg from './package.json'

const external = [
  ...Object.keys(pkg.dependencies),
  ...Object.keys(pkg.peerDependencies),
  'prop-types'
]

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/timepicker.umd.js',
      name: 'timepicker',
      format: 'umd',
    },
    {
      file: 'dist/timepicker.es.js',
      name: 'timepicker',
      format: 'es',
    }
  ],
  plugins: [
    babel({
      babelrc: false,
      exclude: 'node_modules/**',
      plugins: ['transform-class-properties', 'external-helpers'],
      presets: [['env', { modules: false }], 'react']
    })
  ],
  external
}
