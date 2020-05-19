function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 16,
  height: 26
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M9 0L2 7h14L9 0zm0 1.438L13.563 6H4.437L9 1.437zM8 7v11.188l-8-8V26h2V15l8 8V7H8z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9 1.438L4.437 6h9.125L9 1.437z",
  fill: "#fff"
}));

export default SvgComponent;