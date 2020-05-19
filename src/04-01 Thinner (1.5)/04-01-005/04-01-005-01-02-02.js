function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 42,
  height: 42
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M24.5 7C14.835 7 7 14.835 7 24.5S14.835 42 24.5 42 42 34.165 42 24.5 34.165 7 24.5 7zm0 1.5c8.837 0 16 7.163 16 16s-7.163 16-16 16-16-7.163-16-16 7.163-16 16-16zM8 0v7.071h1.016V1.016h6.055V0H8z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10.475 3.182l.707-.707 4.243 4.243-.707.707-4.243-4.243zM0 8v7.071h1.016V9.016h6.055V8H0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2.475 11.182l.707-.707 4.243 4.243-.707.707-4.243-4.243z"
}));

export default SvgComponent;