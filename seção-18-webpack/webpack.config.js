const modoDev = process.env.NODE_ENV !== "production";
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  mode: modoDev ? "development" : "production",
  entry: { main: "./src/principal.js" },
  output: {
    filename: "principal.js",
    path: __dirname + "/public",
  },
  // devServer: {
  //   contentBase: "./public",
  //   port: 9000,
  // },
  optimization: {
    minimizer: [
      // new UglifyJsPlugin({ cache: true, parallel: true }),
      new CssMinimizerPlugin(),
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "estilo.css",
    }),
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
          MiniCssExtractPlugin.loader, // Gera um css minificado separado
          // "style-loader", // Adiciona CSS a DOM injetando a tag <style>
          "css-loader", // interpreta @import, url()...
          "sass-loader",
        ],
      },
      {
        test: /\.(png|svg|jpg|gif|mp3|wav)$/,
        type: "asset/resource",
      },
    ],
  },
};
