const path = require('path');

const config = [
  {
    name: 'client',
    entry: './src/index.js',
    output: {
      path: path.join(__dirname, 'public'),
      filename: 'bundle.js',
      publicPath: '/public/'

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
          test: /\.(png|jpg|mp4|webm|gif)$/,
          use: {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'images/[hash].[ext]'
            }
          }
        }
      ]
    },
    resolve: {
      extensions: ['.js', '.json', '.jsx'],
      alias: {
        components: path.resolve(__dirname, 'src/components'),
        videos: path.resolve(__dirname, 'src/videos'),
        images: path.resolve(__dirname, 'src/images'),
        views: path.resolve(__dirname, 'src/views')
      }
    }
  },
  {
    name: 'server',
    entry: './src/server.jsx',
    output: {
      path: path.join(__dirname, 'public'),
      filename: 'server.js',
      libraryTarget: 'commonjs2',
      publicPath: '/public/'
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
          test: /\.(png|jpg|mp4|webm|gif)$/,
          use: {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'images/[hash].[ext]'
            }
          }
        }
      ]
    },
    resolve: {
      extensions: ['.js', '.json', '.jsx'],
      alias: {
        components: path.resolve(__dirname, 'src/components'),
        videos: path.resolve(__dirname, 'src/videos'),
        images: path.resolve(__dirname, 'src/images'),
        views: path.resolve(__dirname, 'src/views')
      }
    }
  }
];

module.exports = config;
