  
const PATH = require('path');
const HTMLWPP = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.jsx',
  },
  output: {
    filename: './[name].js',
    path: PATH.join(__dirname, './build'),
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        resolve: {
          extensions: ['.js', '.jsx'],
        },
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HTMLWPP({
      template: './src/index.html',
    }),
  ],
  devServer: {
    historyApiFallback: true,
  },
};
