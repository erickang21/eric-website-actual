const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map", // Enable source maps in development mode.
  devServer: {
    port: 3000,
  },
});
