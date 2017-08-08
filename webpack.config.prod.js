const webpack = require('webpack');
const path = require('path');

const config = [
  {
    entry: {
      app: ['./src/index.js']
    },
    output: {
      path: path.resolve(__dirname, 'static'),
      filename: 'bundle.js',
      publicPath: '/static/'
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production')
        }
      }),
      new webpack.optimize.UglifyJsPlugin(),
      new webpack.optimize.OccurrenceOrderPlugin()
    ],
    module: {
      rules: [
        {
          test: /.jsx?$/,
          use: 'babel-loader',
          exclude: /node_modules/
        },
        {
          test: /\.scss$/,
          use: ['style-loader', 'css-loader', 'sass-loader']
        },
        {
          test: /\.(png|jpg)$/,
          use: {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        }
      ]
    },
    resolve: {
      extensions: ['.js', '.json', '.jsx']
    }
  },
  {
    name: 'server',
    entry: './server.jsx',
    output: {
      path: path.join(__dirname, 'static'),
      filename: 'server.js',
      libraryTarget: 'commonjs2',
      publicPath: '/static/'
    },
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /.jsx?$/,
          use: 'babel-loader',
          exclude: /node_modules/
        },
        {
          test: /\.scss$/,
          use: ['isomorphic-style-loader', 'css-loader', 'sass-loader']
        },
        {
          test: /\.(png|jpg)$/,
          use: {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        }
      ]
    },
    resolve: {
      extensions: ['.js', '.json', '.jsx']
    }
  }
];

module.exports = config;
