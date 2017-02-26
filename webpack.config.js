module.exports = {
  devtool: 'inline-source-map',
  entry: {
    main: './src/app/main.tsx'
  },
  output: {
    path: __dirname + '/public',
    filename: 'build/[name].js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: "source-map-loader",
        exclude: [
          /node_modules/
        ]
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: [
          /node_modules/
        ]
      }
    ]
  }
}