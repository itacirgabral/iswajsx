function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 35,
  height: 46
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M17.5 11C7.835 11 0 18.835 0 28.5S7.835 46 17.5 46 35 38.165 35 28.5 27.165 11 17.5 11zm0 1.5c8.837 0 16 7.163 16 16s-7.163 16-16 16-16-7.163-16-16 7.163-16 16-16zM13 9h7.071V7.984h-6.055V1.929H13V9z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M17.243 7.586l-.707-.707 4.242-4.243.707.707-4.242 4.243zM15.121 5.464l-.707-.707L18.657.515l.707.707-4.243 4.242z"
}));

export default SvgComponent;