function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 27,
  height: 15
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M7 15L0 8h14l-7 7zm0-1.438L11.563 9H2.437L7 13.563zM6 8h2V1H6v7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7 13.563L2.437 9h9.126L7 13.563z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M20 0l-7 7h14l-7-7zm0 1.438L24.563 6h-9.125L20 1.437zM19 7h2v7h-2V7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M20 1.438L15.437 6h9.126L20 1.437z",
  fill: "#fff"
}));

export default SvgComponent;