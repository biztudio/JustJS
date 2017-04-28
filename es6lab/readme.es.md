学习笔记
===

* ESLint
    npm i --save-dev eslint 后执行 ./node_modules/.bin/eslint --init 产生一个 .eslintrc 文件

* Babel

    对.babelrc的设置，可以存放在package.json中的。如下：

    ```Javascript
    {
        "babel": {
        "presets": ["es2015"]
        },
    }
    ```

    preset-latest 被替换为 [preset-env](https://babeljs.io/docs/plugins/preset-env/)

    { "presets": ["latest"] } === { "presets": ["env"] }



* 参考链接

  [Tree-shaking with webpack 2 and Babel 6](http://2ality.com/2015/12/webpack-tree-shaking.html/)
