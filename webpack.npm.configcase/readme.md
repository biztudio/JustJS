To work with npm

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
