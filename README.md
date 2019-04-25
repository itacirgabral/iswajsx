# ISWA.jsx

- [ISWA](http://www.signwriting.org/archive/docs7/sw0636_SignWriting_Alphabet_Manual_2010.pdf)
  is a set of graphemes used on sign languages to write
- [original bundle](http://www.movementwriting.org/symbolbank/downloads/ISWA2010/ISWA2010_Symbols_SVG.zip)

## Work In Progress

- [x] [svg optimization](https://github.com/svg/svgo)
- [x] [svg to json](https://github.com/elrumordelaluz/svgson)
- [ ] json to ast
- [ ] ast to jsx

## 01-01-001-01-01 example

<svg xmlns="http://www.w3.org/2000/svg" width="15" height="30" version="1.0"><path d="M13 0h2v15h-2zM0 15h15v15H0z"/><path fill="#fff" d="M2 17h11v11H2z"/></svg>

```json
{
  "name": "svg",
  "type": "element",
  "value": "",
  "attributes": {
    "xmlns": "http://www.w3.org/2000/svg",
    "width": "15",
    "height": "30",
    "version": "1.0"
  },
  "children": [
    {
      "name": "path",
      "type": "element",
      "value": "",
      "attributes": { "d": "M13 0h2v15h-2zM0 15h15v15H0z" },
      "children": []
    },
    {
      "name": "path",
      "type": "element",
      "value": "",
      "attributes": { "fill": "#fff", "d": "M2 17h11v11H2z" },
      "children": []
    }
  ]
}
```

https://astexplorer.net/
