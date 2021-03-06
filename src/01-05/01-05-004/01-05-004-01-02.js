function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 30,
  height: 16
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M3 7h20v9H3z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M5 9h16v3H5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M28.25 5.938L24 10.188V13l5.656-5.656-1.406-1.407zM19.5.813c-.598.028-1.243.274-1.906.937L19 3.156s.7-.707 1.406 0c0 0 .707.73 0 1.438L19 6h2.844s2.121-2.129 0-4.25c0 0-1.028-1-2.344-.938zM13.688.156c-.599.029-1.275.275-1.938.938L13.156 2.5s.73-.707 1.438 0c0 0 .707.73 0 1.438L12.53 6h2.813L16 5.344s2.121-2.129 0-4.25c0 0-.997-1-2.313-.938zM8.938.156C8.338.185 7.662.431 7 1.094c0 0-2.121 2.128 0 4.25L7.656 6h2.813L8.406 3.937s-.707-.73 0-1.437c.147-.146.081-.05.125-.094.232-.165.782-.436 1.313.094l1.406-1.406s-.997-1-2.313-.938zM3.313 1.625c-.599.028-1.244.275-1.907.938 0 0-2.121 2.128 0 4.25L2 7.405V6h1.438l-.626-.625s-.707-.7 0-1.406c.147-.147.081-.05.126-.094.232-.166.75-.437 1.28.094l1.438-1.406s-1.028-1-2.343-.938z"
}));

export default SvgComponent;