function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 44,
  height: 42
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M26.5 7C16.835 7 9 14.835 9 24.5S16.835 42 26.5 42 44 34.165 44 24.5 36.165 7 26.5 7zm0 1.5c8.837 0 16 7.163 16 16s-7.163 16-16 16-16-7.163-16-16 7.163-16 16-16zM9.192 0v7.07h1.017V1.017h6.054V0h-7.07z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10.607 4.242l.707-.707 4.242 4.243-.707.707-4.242-4.243zM12.728 2.121l.707-.707 4.243 4.243-.707.707-4.243-4.243zM8.485 14.849h-7.07v-1.016h6.054V7.778h1.016v7.071z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4.243 13.435l.707-.707L.707 8.485 0 9.192l4.243 4.243zM6.364 11.313l.707-.707-4.243-4.242-.707.707 4.243 4.242z"
}));

export default SvgComponent;