const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  devtool: false,
  entry: {
    index: "./src/index.js",
  },
  devServer: { port: "3001", static: "./dist" },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
      inject: true,
      css: ["./src/style/style.css"],
    }),
  ],
};
