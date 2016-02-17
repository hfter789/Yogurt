var path = require('path');

module.exports = {
    entry: "./src/components/App.jsx",
    output: {
        path: path.join(__dirname, "public/js"),
        filename: "bundle.min.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader"},
            { test: /\.json$/, loader: "json-loader"}
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.json']
    }
};