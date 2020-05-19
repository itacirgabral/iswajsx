function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 60,
  height: 14
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M60 10H18V6h42v4zM0 9h7.071V7.984H1.016V1.929H0V9z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4.243 7.586l-.707-.707 4.242-4.243.707.707-4.242 4.243zM2.121 5.464l-.707-.707L5.657.515l.707.707-4.243 4.242zM16 5H8.929v1.016h6.055v6.055H16V5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M11.757 6.414l.707.707-4.242 4.243-.707-.707 4.242-4.243zM13.879 8.536l.707.707-4.243 4.242-.707-.707 4.243-4.242z"
}));

export default SvgComponent;