function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 42,
  height: 42
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M17.5 7C27.165 7 35 14.835 35 24.5S27.165 42 17.5 42 0 34.165 0 24.5 7.835 7 17.5 7zm0 1.5c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM34 0v7.071h-1.016V1.016h-6.055V0H34z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M31.525 3.182l-.707-.707-4.243 4.243.707.707 4.243-4.243zM42 8v7.071h-1.016V9.016h-6.055V8H42z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M39.525 11.182l-.707-.707-4.243 4.243.707.707 4.243-4.243z"
}));

export default SvgComponent;