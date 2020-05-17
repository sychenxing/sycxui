const fs = require('fs')
const path = require('path')

let allPackages = () => {
    let targets = fs.readdirSync('packages').filter(f => {
        if (!fs.statSync(`packages/${f}`).isDirectory()) {
          return false
        }

        return true
      })

      return targets;
}

let allCompsTargets = () => {
  let targets = fs.readdirSync('packages').filter(f => {
      if (!fs.statSync(`packages/${f}`).isDirectory()) {
        return false
      }

      return true
    })

    return targets;
}

let allThemeTargets = () => {
    // let targets = fs.readdirSync(getPath().root + '/packages/aatheme/src').filter(f => {
    //   if (fs.statSync(`packages/aatheme/src/${f}`).isDirectory()) {
    //     return false
    //   }

    //   return true
    // })
   let targets =[];      
    return targets;
}

let allMainTargets = () => {
  let targets = [];
  targets.push('aamain');

  return targets;
}

function getPath() {
    const rootPath = path.resolve(__dirname, '../..')  
    const distPath = path.resolve(__dirname, '../../dist')  
    return {
      root: rootPath,
      dist: distPath
    };
}

const pathUtil = getPath();
const packages = allPackages();
const themeTargets = allThemeTargets();
const compsTarges = allCompsTargets();
const mainTargets = allMainTargets();

module.exports = {
  pathUtil, packages, themeTargets, compsTarges, mainTargets
}

