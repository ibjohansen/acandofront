const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const StatsPlugin = require('stats-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');


const config = [
  {
    entry: {
      app: ['./src/client.jsx']
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
      new ExtractTextPlugin({
        filename: 'client.css',
        allChunks: true
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
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              { loader: 'css-loader', options: { importLoaders: 1 } },
              'postcss-loader'
            ]
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
        },
        {
          test: /\.(ttf|woff)$/,
          use: {
            loader: 'file-loader',
            options: {
              limit: 8192,
              name: 'public/fonts/[name].[ext]'
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
        views: path.resolve(__dirname, 'src/views'),
        utils: path.resolve(__dirname, 'src/utils')
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
            fallback: 'style-loader',
            use: [
              { loader: 'css-loader', options: { importLoaders: 1 } },
              'postcss-loader'
            ]
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
        },
        {
          test: /\.(ttf|woff)$/,
          use: {
            loader: 'file-loader',
            options: {
              limit: 8192,
              name: 'public/fonts/[name].[ext]'
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
        views: path.resolve(__dirname, 'src/views'),
        utils: path.resolve(__dirname, 'src/utils')
      }
    }
  }
];

module.exports = config;
