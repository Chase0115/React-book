const paths = require('./paths');
const getCSSModuleLocalIdent = require('react-dev-utils/getCSSModuleLocalIdent')

module.export = {
  mode: 'production',
  entry: paths.ssrIndexJs,
  tartget: 'node',
  output: {
    path: paths.ssrBuild,
    filename: 'server.js',
    chunkFilename: 'js/[name].chunk.js',
    publicPath: paths.publicUrlOrPath,
  }
},

module: {
  rules: [
    {
      oneOf: 
    }
  ]
}