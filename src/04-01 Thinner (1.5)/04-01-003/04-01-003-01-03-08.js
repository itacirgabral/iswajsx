function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 44,
  height: 42
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M17.5 7C7.835 7 0 14.835 0 24.5S7.835 42 17.5 42 35 34.165 35 24.5 27.165 7 17.5 7zm0 1.5c8.837 0 16 7.163 16 16s-7.163 16-16 16-16-7.163-16-16 7.163-16 16-16zM29.15 8.485h7.072V7.47h-6.055V1.414h-1.016v7.071z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M33.393 7.071l-.707-.707 4.243-4.243.707.707-4.243 4.243zM31.272 4.95l-.707-.707L34.808 0l.707.707-4.243 4.243zM44 9.192v7.071h-1.016V10.21h-6.055V9.192H44z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M42.586 13.435l-.707-.707-4.243 4.243.707.707 4.243-4.243zM40.464 11.314l-.707-.707-4.242 4.242.707.707 4.242-4.242z"
}));

export default SvgComponent;