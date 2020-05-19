import fs from 'fs'
import iswasvg from '@iswa/svg'
import svgr from '@svgr/core'
import babel from '@babel/core'

const iswaPath = Object.keys(iswasvg)[0]
const iswaTree = iswasvg[iswaPath]

const fileList = []

const babelTransConf = { plugins: ['@babel/plugin-transform-react-jsx'] }

const recursiveList = (tree, path = []) => {
  const entries = Object.entries(tree)
  entries.forEach(([key, value]) => {
    if(Array.isArray(value)) {
      value.forEach(fileName => {
        fileList.push([...path, key, fileName])
      })
    } else {
      recursiveList(tree[key], [...path, key])
    }
  })
}
recursiveList(iswaTree)

fileList.forEach(pathArr => {
  const path = [iswaPath, ...pathArr].join('/')
  const newNameExtension = `${pathArr[pathArr.length - 1].split('.')[0]}.js`
  const newPath = ['./src', ...pathArr.slice(0, pathArr.length -1), newNameExtension].join('/')
  fs.readFile(path, (err, file) => {
    if (!err) {
      svgr.default(file, {
        "plugins": ["@svgr/plugin-svgo", "@svgr/plugin-jsx", "@svgr/plugin-prettier"]
      })
        .then(jsx => {
          const compiledJsx = babel.transform(jsx, babelTransConf).code
          fs.writeFile(newPath, compiledJsx, err => {
            if (err) {
              console.error(err)
            }
          })
        })
        .catch(console.error)
    }
  })
})
