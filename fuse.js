const fsbx = require('fuse-box');

const fuseBox = new fsbx.FuseBox({
  homeDir: 'src',
  outFile: './dist/bundle.js',
  plugins: [
    fsbx.JSONPlugin(),
    fsbx.TypeScriptHelpers(),
    [
      fsbx.SassPlugin({ outputStyle: 'compressed' }),
      fsbx.CSSPlugin()
    ]
  ]
})

fuseBox.devServer('>index.tsx');