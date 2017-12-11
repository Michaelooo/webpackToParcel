module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js'
  },
  cache: true,
  resolve: {
    extensions: [".js", ".json", ".jsx"],
  },
   module: {
     rules:[{
       test: /\.(js|jsx)$/,
       use: 'babel-loader'
     }]
   }
};