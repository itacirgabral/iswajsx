function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 20,
  height: 19
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M20 13l-6 6-6-6h12zM7 0a9.5 9.5 0 019.5 9.5V13h-1V9.5A8.5 8.5 0 007 1H0V0h7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7 1a8.5 8.5 0 018.5 8.5V13h-3V9.5A5.5 5.5 0 007 4H0V1h7z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7 4a5.5 5.5 0 015.5 5.5V13h-1V9.5A4.5 4.5 0 007 5H0V4h7z"
}));

export default SvgComponent;