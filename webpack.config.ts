import * as path from 'path';
import * as CopyWebpackPlugin from 'copy-webpack-plugin';
import * as MiniCssExtractPlugin from 'mini-css-extract-plugin';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';

module.exports = {
  mode: 'production',
  entry: './static/js/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.bundle.js',
  },
resolve: {
  extensions: ['.ts', '.js', '.json'],
  fallback:{
    'fs': false,
  },
  alias: {
    'handlebars': 'handlebars/dist/handlebars.js',
    'ejs': 'ejs.min.js'
  }
},
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: path.resolve(__dirname, 'tsconfig.json'),
            },
          },
        ],
        exclude: /(node_modules)/
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {},
          },
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|)$/,
        type: 'asset/inline',
      },
    {
      test: /\.(png|jpe?g|gif|jp2|svg|webp)$/,
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
      },
    },
    ]
  },
  plugins: [new MiniCssExtractPlugin(), 
    new HtmlWebpackPlugin({
      template: './static/index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
      },
    }),
  new CopyWebpackPlugin({
    patterns: [
      {
        from: '**/*',
        context: path.resolve(__dirname, 'src', 'assets'),
        to: './assets',
      },
    ],
  }),],
    devServer: {
        static: {
          directory: path.join(__dirname, 'dist'),
        },
        historyApiFallback: true,
        compress: true,
        port: 4000,
        hot: true,
    },
}
