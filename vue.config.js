module.exports = {
  // // css相关配置
  // css: {
  //   loaderOptions: {
  //     sass: {
  //       prependData: `@import "~@/styles/main.scss";`
  //     }
  //   }
  // }
  chainWebpack: config => {
    // 开发模式
    config.when(process.env.NODE_ENV === "development", config => {
      config
        .entry("app")
        .clear()
        .add("./src/main-dev.js");
    });
    // 发布模式
    config.when(process.env.NODE_ENV === "production", config => {
      config
        .entry("app")
        .clear()
        .add("./src/main-prod.js");
    });
  }
};
