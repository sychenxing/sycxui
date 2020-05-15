const fs = require('fs')
const path = require('path')



let allPackages = () => {
    let targets = fs.readdirSync('packages').filter(f => {
        if (!fs.statSync(`packages/${f}`).isDirectory()) {
          return false
        }

        const pkg = require(`../../packages/${f}/package.json`)
        if (pkg.private && !pkg.buildOptions) {
          return false
        }
        return true
      })

      return targets;
  }

function pathUtil() {
  const rootPath = path.resolve(__dirname, '../..')  
  const distPath = path.resolve(__dirname, '../../dist')  
  return {
    root: rootPath,
    dist: distPath
  };
}

module.exports = {
  allPackages, pathUtil
}

