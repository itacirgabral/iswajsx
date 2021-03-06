function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 44,
  height: 42
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M26.5 7C16.835 7 9 14.835 9 24.5S16.835 42 26.5 42 44 34.165 44 24.5 36.165 7 26.5 7zm0 1.5c8.837 0 16 7.163 16 16s-7.163 16-16 16-16-7.163-16-16 7.163-16 16-16zM14.85 8.485H7.777V7.47h6.055V1.414h1.016v7.071z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10.607 7.071l.707-.707L7.07 2.121l-.707.707 4.243 4.243zM12.728 4.95l.707-.707L9.192 0l-.707.707 4.243 4.243zM0 9.192v7.071h1.016V10.21h6.055V9.192H0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M1.414 13.435l.707-.707 4.243 4.243-.707.707-4.243-4.243zM3.536 11.314l.707-.707 4.242 4.242-.707.707-4.242-4.242z"
}));

export default SvgComponent;