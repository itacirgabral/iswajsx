function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 60,
  height: 14
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 9h42v4H0V9zM60 5h-7.071v1.016h6.055v6.055H60V5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M55.757 6.414l.707.707-4.242 4.243-.707-.707 4.242-4.243zM57.879 8.536l.707.707-4.243 4.242-.707-.707 4.243-4.242zM44 9h7.071V7.984h-6.055V1.929H44V9z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M48.243 7.586l-.707-.707 4.242-4.243.707.707-4.242 4.243zM46.121 5.464l-.707-.707L49.657.515l.707.707-4.243 4.242z"
}));

export default SvgComponent;