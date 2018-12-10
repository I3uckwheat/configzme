module.exports = {
  outputDir: "../backend/app/public/configz-frontend",
  baseUrl: "./",
  devServer: {
    proxy: "http://localhost:7777"
  }
};
