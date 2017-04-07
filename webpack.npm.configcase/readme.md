To work with npm

package.json defines the ref js resources;

webpack.config.js defines the how to integrate the related js resources to the output file;

It is not particularly to run wepack from CLI.

Usually, we set up a little shortcut in package.json
'''javascript
{
  ...
  "scripts": {
    "build": "webpack"
  },
  ...
}

'''

Then we run npm instsall

Then we can run webpack via the command: npm run build

NOTE: we can pass custom parameters to webpack by adding two dashes to the npm run build command, e.g. npm run build -- --colors.


最佳实践：

在当前项目中安装 webpack: npm install webpack@<version> --save-dev

安装完成后，在 package.json 中配置 npm 的脚本指令:

'''javascript
"scripts": {
    "start": "webpack --config webpack.config.js"
}
'''

npm run start

全局的 webpack 虽然也被支持，但是不是最佳实践, 因为这可能会由于版本问题造成阻碍



