function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 60,
  height: 16
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M60 4H18v4h42V4zM7 16h7.071v-1.016H8.016V8.929H7V16z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M11.243 14.586l-.707-.707 4.242-4.243.707.707-4.242 4.243zM9.121 12.464l-.707-.707 4.243-4.242.707.707-4.243 4.242zM0 9h7.071V7.984H1.016V1.929H0V9z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4.243 7.586l-.707-.707 4.242-4.243.707.707-4.242 4.243zM2.121 5.464l-.707-.707L5.657.515l.707.707-4.243 4.242z"
}));

export default SvgComponent;