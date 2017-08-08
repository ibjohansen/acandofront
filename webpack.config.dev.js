const path = require('path');

const config = [
  {
    name: 'client',
    entry: './src/index.js',
    output: {
      path: path.join(__dirname, 'static'),
      filename: 'bundle.js',
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
      extensions: ['.js', '.json', '.jsx'],
      alias: {
        components: path.resolve(__dirname, 'src/components'),
        views: path.resolve(__dirname, 'src/views')
      }
    }
  },
  {
    name: 'server',
    entry: './src/server.jsx',
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
      extensions: ['.js', '.json', '.jsx'],
      alias: {
        components: path.resolve(__dirname, 'src/components'),
        views: path.resolve(__dirname, 'src/views')
      }
    }
  }
];

module.exports = config;
