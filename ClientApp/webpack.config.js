const path = require("path");

module.exports = {
    entry: "/src/index", 

    output: {
        path: path.join(__dirname, "../wwwroot/dist"), 
        filename: "bundle.js", 
        publicPath: "dist/"
    }, 

    resolve: {
        extensions: [".js", ".ts", ".tsx"]
    }, 

    module: {
        rules: [
            {
                test: /\.(js|ts)x$/, 
                exclude: path.join(__dirname, "/node_modules"), 
                use: "babel-loader"
            }, 

            {
                test: /\.css$/, 
                use: [
                    "style-loader",
                    "css-loader"
                ]
            }, 
            { 
                test: /\.(jpg|png|woff|woff2|eot|ttf|svg)$/, 
                loader: 'url-loader' 
            }
        ]
    }, 
}