// eslint-disable-next-line no-undef
const HtmlWebpackPlugin = require("html-webpack-plugin");
// eslint-disable-next-line no-undef
module.exports = {
  entry: "./index.js",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
