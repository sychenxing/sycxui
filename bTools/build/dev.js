const execa = require('execa')
const path = require('path')

run();

async function run() {  

  let cmd = process.env.DEV_TYPE === 'dev' ? 'webpack-dev-server' : 'webpack';
  
  await execa(
    cmd,
    [
      '--config',
      [
        path.resolve(__dirname, `../webpack/webpack.dev.conf.js`)
      ].filter(Boolean).join(',')
    ],
    { stdio: 'inherit' }
  )
}
