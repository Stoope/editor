const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: path.join(__dirname, "src/index.html"),
  filename: "./index.html"
});

module.exports = {
  mode: "development",
  devtool: "eval-cheap-module-source-map",
  entry: path.join(__dirname, "src/index.js"),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: [
          {
            loader: "thread-loader",
            options: {
              poolTimeout: Infinity
            }
          },
          "babel-loader"
        ],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "static/fonts/"
            }
          }
        ]
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: "url-loader",
        options: {
          limit: 100,
          name: "static/media/[name].[hash:8].[ext]"
        }
      }
    ]
  },
  plugins: [htmlWebpackPlugin],
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      "@": path.resolve(__dirname, "src")
    }
  },
  devServer: {
    port: 3001,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    },
    historyApiFallback: true
  }
};
