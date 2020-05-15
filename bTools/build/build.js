const execa = require('execa')
const path = require('path')
const chalk = require('chalk')
const Spinner = require('cli-spinner').Spinner

build();

async function build() {  
 
  
  print('Building CX UI Components start...');

  await execa(
    'webpack',
    [
      '--config',
      [
        path.resolve(__dirname, `../webpack/webpack.build.conf.js`)
      ].filter(Boolean).join(',')
    ],
    { stdio: 'inherit' }
  )

  print('Building CX UI Components end...');
}

function print(msg) {
  process.stdout.write('\n')
  let spinner = new Spinner(chalk.green(`%s ${msg}`))
  spinner.setSpinnerString('⣾⣽⣻⢿⡿⣟⣯⣷')
  spinner.start()
  spinner.stop();
  process.stdout.write('\n')
}