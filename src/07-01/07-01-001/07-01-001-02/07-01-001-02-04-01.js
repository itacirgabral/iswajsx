function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 74,
  height: 9
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M74 1v8H0V1h26v6h21V1h27z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M26 1v6h21V1H26z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M34.5 0C31 0 31 4 31 4h2s0-2 1.5-2 1.5 2 4 2C42 4 42 0 42 0h-2s0 2-1.5 2-1.5-2-4-2z"
}));

export default SvgComponent;