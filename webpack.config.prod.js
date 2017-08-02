const webpack = require('webpack');
const path = require('path');

const config = {
    entry: {
        app: ['./src/index.js']
    },
    output: {
        path: path.resolve(__dirname, 'static'),
        filename: 'bundle.js',
        publicPath: ''
    },
    plugins: [
        //new webpack.HotModuleReplacementPlugin()
        new webpack.DefinePlugin({
        'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin()
        
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
};

module.exports = config;