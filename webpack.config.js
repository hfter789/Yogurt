import path from 'path';
import extend from 'extend';
import webpack from 'webpack';

const config = {
    context: __dirname + '/src',
    devtool: 'eval-cheap-module-source-map',
    entry: ['webpack-hot-middleware/client?reload=true', './client.jsx'],
    output: {
        path: path.join(__dirname, "js"),
        filename: "bundle.min.js",
        publicPath: '/'
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            minimize: true
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            { test: /\.json$/, loader: "json-loader" }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.json']
    }
};

module.exports = config;