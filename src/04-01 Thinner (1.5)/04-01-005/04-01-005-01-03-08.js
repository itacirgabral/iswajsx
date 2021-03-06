function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 44,
  height: 41
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M17.5 6C7.835 6 0 13.835 0 23.5S7.835 41 17.5 41 35 33.165 35 23.5 27.165 6 17.5 6zm0 1.5c8.837 0 16 7.163 16 16s-7.163 16-16 16-16-7.163-16-16 7.163-16 16-16zM29.15 7.485h7.072V6.47h-6.055V.414h-1.016v7.071z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M32.333 5.01l-.707-.707L35.868.061l.707.707-4.242 4.242zM44 8.192v7.071h-1.016V9.21h-6.055V8.192H44z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M41.525 11.374l-.707-.707-4.243 4.243.707.707 4.243-4.243z"
}));

export default SvgComponent;