const publicPath = process.env.NODE_ENV === 'production' ? '/white/' : '/'

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: publicPath,
})
