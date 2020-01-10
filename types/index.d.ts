import { Compiler } from 'webpack';
/**
 * 处理vue项目的插件
 */
declare class VueWebpackPlugin {
    options: {};
    /**
     * vue-loader配置项 详见：https://vue-loader.vuejs.org/zh/options.html
     * @param options vue-loader配置项
     */
    constructor(options?: {
        [key: string]: any;
    });
    /**
     * 执行插件
     * @param compiler
     */
    apply(compiler: Compiler): void;
}
export { VueWebpackPlugin };
export default VueWebpackPlugin;
