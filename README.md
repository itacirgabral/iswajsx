# ISWA.jsx

![reactiontime](./reactiontime.png)

- [ISWA](http://www.signwriting.org/archive/docs7/sw0636_SignWriting_Alphabet_Manual_2010.pdf)
  is a set of graphemes used on sign languages to write
- [original bundle](http://www.movementwriting.org/symbolbank/downloads/ISWA2010/ISWA2010_Symbols_SVG.zip)

## Work In Progress

- [x] [svg optimization](https://github.com/svg/svgo)
- [x] [svg to json](https://github.com/elrumordelaluz/svgson)
- [ ] [svgr](https://www.smooth-code.com/open-source/svgr/docs/options/)

```
import svgr from '@svgr/core'
const svgCode = `
<svg xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <rect x="10" y="10" height="100" width="100"
    style="stroke:#ff0000; fill: #0000ff"/>
</svg>
`
svgr(svgCode, { icon: true }, { componentName: 'MyComponent' }).then(jsCode => {
  console.log(jsCode)
  })
```

## 01-01-001-01-01 example
```html
<svg xmlns="http://www.w3.org/2000/svg" width="15" height="30" version="1.0">
  <path d="M13 0h2v15h-2zM0 15h15v15H0z"/>
  <path fill="#fff" d="M2 17h11v11H2z"/>
</svg>
```
