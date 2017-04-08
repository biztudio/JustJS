[npm install --save 与 npm install --save-dev 的区别](http://www.cnblogs.com/guojunru/p/6092644.html)

单个 module 的安装:
===
npm install module-name --save 自动把模块和版本号添加到dependencies部分;

npm install module-name --save-dve 自动把模块和版本号添加到devdependencies部分.

批量 module 的安装:
===
npm install --production: npm只帮我们自动安装package.json中dependencies部分的模块;

npm install: package.json中指定的dependencies和devDependencies都会被自动安装进来。


webpack 把每个文件(.css, .html, .scss, .jpg, etc.) 都作为模块处理。webpack loader 会将这些文件转换为模块.

在 webpack 配置中定义 loader 时，要定义在 module.rules 中，而不是 rules。

webpack 的配置是标准的 Node.js CommonJS 模块：

* 通过 require(...) 导入其他模块
* 通过 require(...) 使用  npm 的工具函数
* 使用 javascript 控制流表达式，例如 ? : 
* 对常用值使用常量或变量
* 编写并执行函数来生成部分配置

