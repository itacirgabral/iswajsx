function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 60,
  height: 14
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 10h42V6H0v4zM60 9h-7.071V7.984h6.055V1.929H60V9z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M55.757 7.586l.707-.707-4.242-4.243-.707.707 4.242 4.243zM57.879 5.464l.707-.707L54.343.515l-.707.707 4.243 4.242zM44 5h7.071v1.016h-6.055v6.055H44V5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M48.243 6.414l-.707.707 4.242 4.243.707-.707-4.242-4.243zM46.121 8.536l-.707.707 4.243 4.242.707-.707-4.243-4.242z"
}));

export default SvgComponent;