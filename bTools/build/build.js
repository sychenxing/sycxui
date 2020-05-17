const execa = require('execa')
const path = require('path')
const chalk = require('chalk')
const Spinner = require('cli-spinner').Spinner



buildAllTargets()


function buildAllTargets() {
   let buildType = process.env.BUILD_TYPE;

   build('', buildType)
}

async function build(target, buildType) {  
  await execa(
    'webpack',
    [
      `--env.TARGET=${target}`,
      `--env.BUILD_TYPE=${buildType}`,
      '--config',
      [
        path.resolve(__dirname, `../webpack/webpack.build.conf.js`)
      ].filter(Boolean).join(',')
    ],
    { stdio: 'inherit' }
  )
}
