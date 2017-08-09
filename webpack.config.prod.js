const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const StatsPlugin = require('stats-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');


const config = [
  {
    entry: {
      app: ['./src/index.js']
    },
    output: {
      path: path.resolve(__dirname, 'public'),
      filename: 'js/bundle.js',
      publicPath: '/'
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
      filename: 'js/server.js',
      libraryTarget: 'commonjs2',
      publicPath: '/'
    },
    devtool: 'source-map',
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production')
        }
      }),
      new ExtractTextPlugin({
        filename: 'styles.css',
        allChunks: true
      }),
      new OptimizeCssAssetsPlugin({
        cssProcessorOptions: { discardComments: { removeAll: true } }
      }),
      new StatsPlugin('stats.json', {
        chunkModules: true,
        modules: true,
        chunks: true,
        exclude: [/node_modules[\\\/]react/],
      }),
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
          use: ExtractTextPlugin.extract({
            fallback: 'isomorphic-style-loader',
            use: [{
              loader: 'css-loader',
              options: {
                modules: true,
                importLoaders: 1,
                localIdentName: '[hash:base64:10]',
                sourceMap: true
              }
            },
            {
              loader: 'sass-loader'
            }]
          })
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
