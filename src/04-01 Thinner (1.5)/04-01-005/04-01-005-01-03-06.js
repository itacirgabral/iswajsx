function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 43,
  height: 42
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M25.5 7C15.835 7 8 14.835 8 24.5S15.835 42 25.5 42 43 34.165 43 24.5 35.165 7 25.5 7zm0 1.5c8.837 0 16 7.163 16 16s-7.163 16-16 16-16-7.163-16-16 7.163-16 16-16zM8.193 0v7.07h1.016V1.017h6.055V0H8.193z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10.668 3.182l.707-.707 4.242 4.242-.707.707-4.242-4.242zM7.486 14.849H.415v-1.016h6.054V7.778h1.017v7.071z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4.304 12.374l.707-.707L.768 7.424l-.707.707 4.243 4.243z"
}));

export default SvgComponent;