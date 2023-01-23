const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
});
module.exports = {
  //output path for build
  publicPath:
    process.env.NODE_ENV === "production" ? "/output_public_path/" : "/",
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "src/scss/_variables.scss";
          @import "src/scss/_reset.scss";
          @import "src/scss/mixins/_flexbox.scss";
          @import "src/scss/_channelsight-widget.scss";
          @import "src/scss/_helpers.scss";
          
        `,
      },
    },
  },
};
