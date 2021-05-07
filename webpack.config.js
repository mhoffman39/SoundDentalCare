// const HtmlWebPackPlugin = require("html-webpack-plugin");
// const htmlPlugin = new HtmlWebPackPlugin({
//   template: "./src/index.html",
//   filename: "./index.html"
// });

// module.exports = {

// mode: 'development',
//   module: {
//     rules: [{
//       test: /\.js$/,
//       exclude: /node_modules/,
//       use: {
//         loader: "babel-loader"
//       }
//     },
//   {
//     test: /\.css$/,
//     use: ["style-loader", "css-loader"]
//   }
//   ]},
//   plugins: [htmlPlugin]
// };

const path = require('path');

const SRC_DIR = path.join(__dirname, 'src');
const OUT_DIR = path.join(__dirname, 'public');

module.exports = {
  entry: path.join(SRC_DIR, 'index.js'),
  output: {
    path: OUT_DIR,
    filename: 'App.js'
  },
  module: {
    rules: [
      {
        test:/\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test:/\.css$/i,
        use: ["style-loader", "css-loader"],
      }
    ]
  },
  mode: 'development',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: 'inline-source-map'
};
