function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 13,
  height: 7
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M6.5.5L0 7h13L6.5.5zm0 1.406L10.563 6H2.437L6.5 1.906z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6.5 1.906L2.437 6h8.126L6.5 1.906z",
  fill: "#fff"
}));

export default SvgComponent;