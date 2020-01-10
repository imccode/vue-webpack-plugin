import { Compiler } from 'webpack'
import VuePlugin from 'vue-loader/lib/plugin'

/**
 * 处理vue项目的插件
 */
class VueWebpackPlugin {
  options = {}
  /**
   * vue-loader配置项 详见：https://vue-loader.vuejs.org/zh/options.html
   * @param options vue-loader配置项
   */
  constructor(options: { [key: string]: any } = {}) {
    this.options = options
  }
  /**
   * 执行插件
   * @param compiler
   */
  apply(compiler: Compiler) {
    const { resolve, plugins, module } = compiler.options

    resolve.extensions.push('.vue')
    module.rules.push({
      test: /\.vue$/,
      loader: 'vue-loader',
      options: this.options
    })
    plugins.push(new VuePlugin())
  }
}

export { VueWebpackPlugin }
export default VueWebpackPlugin
module.exports = VueWebpackPlugin
