# vue-webpack-plugin

:kissing_heart:一个处理vue框架的webpack插件。

:point_right:
[![github](https://img.shields.io/github/release-date/imccode/vue-webpack-plugin.svg)](https://github.com/imccode/vue-webpack-plugin/releases)
[![npm-version](https://img.shields.io/npm/v/vue-webpack-plugin.svg)](https://www.npmjs.com/package/vue-webpack-plugin)
[![webpack](https://img.shields.io/badge/webpack-%3E%20%3D%204.0.0-blue.svg)](https://webpack.js.org/)
[![nodejs](https://img.shields.io/badge/node-%3E%20%3D%2010.0.0-blue.svg)](https://nodejs.org/)
[![license](https://img.shields.io/npm/l/vue-webpack-plugin.svg)](https://www.npmjs.com/package/vue-webpack-plugin)
[![pull request](https://img.shields.io/badge/PRs-welcome-green.svg)](https://github.com/imccode/vue-webpack-plugin/pulls)

## 安装获取

```shell
yarn add vue-webpack-plugin -D

npm install vue-webpack-plugin -D

pnpm install vue-webpack-plugin -D
```

## 使用方式

```javascript
const VueWebpackPlugin = require('vue-webpack-plugin')

module.exports = {
  plugins: [new VueWebpackPlugin()]
}
```

```javascript
const VueWebpackPlugin = require('vue-webpack-plugin')

module.exports = {
  plugins: [new VueWebpackPlugin({
    hotReload: false
  })]
}
```

插件的参数为vue-loader的参数，[详见](https://vue-loader.vuejs.org/zh/options.html)