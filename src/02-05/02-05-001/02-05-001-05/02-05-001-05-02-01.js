function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 16,
  height: 18
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M8 0L1 7h14L8 0zm0 1.438L12.563 6H3.437L8 1.437zM7 7h2v7H7V7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8 1.438L3.437 6h9.126L8 1.437z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 16v2h16v-2H0z"
}));

export default SvgComponent;