import buble from 'rollup-plugin-buble'
const packageJson = require('./package.json')

export default {
  entry: 'src/index.js',
  external: [
    'crypto',
    ...Object.keys(packageJson.dependencies),
    ...Object.keys(packageJson.peerDependencies)
  ],
  plugins: [buble()],
  targets: [
    {
      dest: packageJson.main,
      format: 'cjs',
      sourceMap: true
    },
    {
      dest: packageJson.module,
      format: 'es',
      sourceMap: true
    }
  ]
}
