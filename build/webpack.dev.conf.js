const webpack = require("webpack");
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')

const devWebpackConfig = merge(baseWebpackConfig, {
    // DEV settings gonna be here
    mode: 'development',
    devServer: {
        // historyApiFallback: true,
        // noInfo: true,
        contentBase: baseWebpackConfig.externals.paths.dist,

        overlay: {
            warnings: true,
            errors: true
        },
        port: 8081,
    },

    devtool: 'cheap-module-eval-source-map',
    plugins: [
        new webpack.SourceMapDevToolPlugin({
            filename: "[file].map"
        }),
    ]
})
// export devWebpackConfig
module.exports = new Promise((resolve, reject) => {
    resolve(devWebpackConfig)
})