const webpack = require("webpack");
const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
    entry: {
        vendor: ["jquery", "owl.carousel", "./src/assets/js/ssr.js"],
        app: ["@babel/polyfill", "./src/client/client.js"]
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    chunks: "all",
                    name: "vendor",
                    test: "vendor",
                    enforce: true
                }
            }
        }
    },
    target: "web",
    output: {
        path: path.resolve(__dirname, "./public"),
        filename: "Assets/js/[name].js",
        publicPath: "/"
    },
    mode: "production",
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify("production")
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
            WOW: "wowjs",
            __isBrowser__: "true"
        })
    ]
});
