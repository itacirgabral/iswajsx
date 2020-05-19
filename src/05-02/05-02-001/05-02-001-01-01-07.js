function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 30,
  height: 68
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M2 0v38.594l28 28L28.594 68 0 39.406V0h2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3 0v38.188l27 26.968v1.438l-28-28V0h1zM0 39.406L28.594 68h-1.438L0 40.844v-1.438z",
  fill: "#fff"
}));

export default SvgComponent;