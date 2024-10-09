const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'static/frontend'),
    filename: 'main.js',
    publicPath: '/static/frontend/',  // Important for HMR to know where the bundle is
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'static/frontend'),
    },
    hot: true,           // Enable hot module replacement
    compress: true,      // Enable gzip compression
    port: 8000,          // Webpack Dev Server will run on port 3000
    historyApiFallback: true,  // Fallback for single-page apps
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  mode: 'development',
};
