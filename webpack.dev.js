const webpack = require("webpack");
const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const nodeExternals = require("webpack-node-externals");

module.exports = merge(common, {
    entry: {
        app: ["./src/server/index.js"]
    },
    target: "node",
    externals: [
        nodeExternals({
            // this WILL include `jquery` and `webpack/hot/dev-server` in the bundle, as well as `lodash/*`
            whitelist: ["react-helmet", "jquery"]
        })
    ],
    output: {
        path: path.resolve(__dirname, "./public"),
        filename: "[name].js",
        libraryTarget: "commonjs2",
        publicPath: "/"
    },
    mode: "development",
    devtool: "source-map",
    plugins: [
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify("development")
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
            WOW: "wowjs",
            __isBrowser__: "false"
        })
    ]
});
