加载器(loaders)
===

loader 是对应用程序中资源文件进行转换。它们是（运行在 Node.js 中的）函数，可以将资源文件作为参数的来源，然后返回新的资源文件。

以 css 为例，npm install css-loader --save-dev 之后， 可以配置 webpack.config.js, 对每个 .css 文件使用 css-loader。

通过 webpack.config.js, module.rules 允许你在 webpack 配置中指定几个 loader.
每个 loader 的规格是 {test: ..., use[{loader:...}, {loader:...}]}

loader 模块需要导出为一个函数，并且使用 Node.js 兼容的 JavaScript 编写。在通常情况下，你会使用 npm 来管理 loader，但是你也可以将 loader 模块作为应用程序中的文件。

按照约定，loader 通常被命名为 XXX-loader，其中 XXX 是上下文的名称，例如 json-loader.

