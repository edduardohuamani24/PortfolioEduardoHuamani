//EXPORTAMOS UN PAQUETE DE NODE JS PARA OBTENER LA DIRECCIÓN ABSOLUTA
const path = require("path");
//exportar paquete de node
const HTMLWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: "./js/main.js",
  output: {
    filename: "build.js",
    //El método resolve concaquetena la dirección absoluta con dist y crear una ruta a esa dirección
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        //Va a decir  cuales son las extensiones que loader va a evaluar mediante este loader
        test: /\.css$/,
        //Cuando webpack se encuentre con esta extensión utilizará el siguiente loader
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpe?g|png|gif|svg|webp)$/i,
        use: ["file-loader?name=img/[name].[ext]", "image-webpack-loader"],
      },
      // {
      //   type: "asset",
      //   test: /\.(jpe?g|png|gif|svg|webp)$/i,
      // },
    ],
  },
  //Instanciamos
  plugins: [
    new HTMLWebpackPlugin({
      //Crear otro html según la plantilla
      filename: "index.html",
      //USAR DE PLANTILLA
      template: "./index.html",
    }),
  ],
};
