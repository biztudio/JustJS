Learn Webpack from scratch based on a webpack.config.js file

For a more complex configuration, we can use a configuration file that webpack can reference to bundle your code. After you create a webpack.config.js file, you can represent the CLI command above with the following config settings.

[Get Started](https://webpack.js.org/guides/get-started/)

1. create the index.js file which has the feature and import the related js libs (lodash)

2. create index.html which refer the bundle.js with line:
    '''HTML
        <script src="bundle.js"></script>
    '''    

3. npm install

4. run command: webpack ./index.js ./bundle.js