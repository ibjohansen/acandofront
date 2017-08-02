const webpack = require('webpack');
const path = require('path');

const config = {
    entry: {
        app: ['./src/index.js']
    },
    output: {
        path: path.resolve(__dirname, ''),
        filename: 'bundle.js',
        publicPath: ''
    },
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