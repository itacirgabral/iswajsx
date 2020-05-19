function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 18,
  height: 9
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M9 0L0 9h18L9 0zm0 1.406L15.563 8H2.437L9 1.406z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9 1.406L2.437 8h13.126L9 1.406z",
  fill: "#fff"
}));

export default SvgComponent;