function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 9,
  height: 9
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 9h7.071V7.984H1.016V1.929H0V9z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2.121 5.464l4.243-4.242-.707-.707-4.243 4.242.707.707zM4.243 7.586l4.242-4.243-.707-.707-4.242 4.243.707.707z"
}));

export default SvgComponent;