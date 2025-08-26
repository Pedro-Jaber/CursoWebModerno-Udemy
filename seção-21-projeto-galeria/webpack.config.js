const modoDev = process.env.NODE_ENV !== "production";
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
// const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: modoDev ? "development" : "production",
  entry: "./src/index.js",
  devServer: {
    static: "./build",
    port: 9000,
    client: {
      overlay: {
        errors: true,
        warnings: false, // Set to false to hide warnings in the overlay
      },
    },
  },
  optimization: {
    minimizer: [
      // new UglifyJsPlugin({
      //     cache: true,
      //     parallel: true,
      //     sourceMap: true
      // }),
      // new OptimizeCSSAssetsPlugin({}),
      new CssMinimizerPlugin(),
    ],
  },
  output: {
    filename: "app.js",
    path: __dirname + "/build",
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: "estilo.css" }),
    new CopyWebpackPlugin([
      { context: "src/", from: "**/*.html" },
      { context: "src/", from: "imgs/**/*" },
    ]),
    new TerserPlugin({
      parallel: true,
      terserOptions: {
        ecma: 6,
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.s?[ac]ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          // 'style-loader', // Adiciona CSS a DOM injetando a tag <style>
          "css-loader", // interpreta @import, url()...
          "sass-loader",
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        // use: ["file-loader"],
        type: "asset/resource",
      },
      {
        test: /.(ttf|otf|eot|svg|woff(2)?)$/,
        // use: ["file-loader"],
        type: "asset/resource",
      },
    ],
  },
};
