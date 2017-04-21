Webpack 分离资源
===

分离资源实现缓存资源和并行加载资源

* 对于所依赖的许多提供框架/功能需求的第三方库代码。不同于应用程序代码，这些第三方库代码不会频繁修改。如果将这些库(library)中的代码，保留在与应用程序代码相独立的 bundle 中，就可以利用浏览器缓存机制，把这些文件长时间地缓存在用户机器上。-- 为了完成这个目标，不管应用程序代码如何变化，vendor 文件名中的 hash 部分都必须保持不变。 **通过 [CommonChunkPlugin](https://doc.webpack-china.org/guides/code-splitting-libraries) 分离 vendor/lib 代码**.

* CSS 样式代码分离到单独的 bundle 中，与应用程序的逻辑分离。 这加强了样式的可缓存性，并且使得浏览器能够并行加载应用程序代码中的样式文件，避免无样式内容造成的闪烁问题(FOUC - flash of unstyled content)。**通过 [ExtractTextWebpackPlugin](https://doc.webpack-china.org/guides/code-splitting-css) 来分离 CSS**.


分离 CSS

通过将 CSS 以模块引入的方式 import 到 javascript 代码中，同时用 css-loader ( 像 js 模块一样输出 CSS ) 来实现 Webpack 对 CSS 文件进行打包. 这里有一个缺点就是无法使用浏览器的能力，去异步且并行去加载 CSS, 页面需要等待整个 JavaScript 文件加载完，才能进行样式渲染。webpack 能够用 [ExtractTextWebpackPlugin](https://doc.webpack-china.org/plugins/extract-text-webpack-plugin) 将 CSS 单独打包，以解决以上问题（将打包的 CSS 提出出来并输出成 CSS 文件）
