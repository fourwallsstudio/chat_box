const path = require('path');

module.exports = {
  entry: ['./frontend/chat_box.jsx'],
  output: {
    path: path.resolve(__dirname, 'public', 'dist'),
    filename: 'bundle.js',
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '*'],
    alias: {
      components: path.resolve(__dirname, 'frontend/components'),
      reducers: path.resolve(__dirname, 'frontend/reducers'),
      actions: path.resolve(__dirname, 'frontend/actions')
    }
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/],
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react'],
          plugins: ['transform-object-rest-spread', 'transform-class-properties'],
        },
      }
    ]
  }
};
