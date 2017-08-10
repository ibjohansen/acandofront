const path = require('path');

const config = [
  {
    name: 'client',
    entry: './src/index.js',
    output: {
      path: path.join(__dirname, 'public'),
      filename: 'js/bundle.js',
      publicPath: '/'

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
          use: [
            'style-loader',
            { loader: 'css-loader', options: { importLoaders: 1 } },
            'postcss-loader'
          ]
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
        routes: path.resolve(__dirname, 'src/routes'),
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
      filename: 'js/server.js',
      libraryTarget: 'commonjs2',
      publicPath: '/'
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
          use: [
            'isomorphic-style-loader',
            { loader: 'css-loader', options: { importLoaders: 1 } },
            'postcss-loader'
          ]
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
        routes: path.resolve(__dirname, 'src/routes'),
        videos: path.resolve(__dirname, 'src/videos'),
        images: path.resolve(__dirname, 'src/images'),
        views: path.resolve(__dirname, 'src/views')
      }
    }
  }
];

module.exports = config;
