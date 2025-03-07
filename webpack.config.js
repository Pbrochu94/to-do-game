const { watchFile } = require("fs");
const path = require("path");
const { Template } = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports ={
    mode:"development",
    entry:"./src/index.js",
    output:{
        filename:"bundle.js",
        path:path.resolve(__dirname,"dist"),
        clean:true,
    },
    devtool:"eval-source-map",
    devServer: {
        watchFiles: ["./src/main.html"],
        static: "./dist",
        hot: true,  // Active le Hot Module Replacement
        liveReload: true,  // Recharge la page si un fichier statique change
    },
    module: {
        rules:[{
            test:/\.css$/,
            use:["style-loader", "css-loader"],
            },
            {
            test: /\.html$/i,
            loader: "html-loader",
            }]
        },
    plugins:[
        new HtmlWebpackPlugin({
            template:"./src/main.html",
            inject:"body",
            filename:"main.html",
        }),
    ]
}
