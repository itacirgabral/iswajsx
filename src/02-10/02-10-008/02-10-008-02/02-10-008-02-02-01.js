function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 16,
  height: 8
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M8 0L0 8h16L8 0zm0 1.406L13.563 7H2.437L8 1.406z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8 1.406L2.437 7h11.126L8 1.406z",
  fill: "#fff"
}));

export default SvgComponent;