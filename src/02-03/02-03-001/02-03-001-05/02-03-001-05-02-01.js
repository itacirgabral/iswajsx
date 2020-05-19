function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 17,
  height: 18
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M8.5 0l-7 7h14l-7-7zm0 1.438L13.063 6H3.937L8.5 1.437zM5 7h2v7H5V7zM10 7h2v7h-2V7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7 7v7h3V7H7zM8.5 1.438L3.937 6h9.126L8.5 1.437z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 16v2h17v-2H0z"
}));

export default SvgComponent;