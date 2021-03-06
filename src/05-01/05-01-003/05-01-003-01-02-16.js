function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 60,
  height: 16
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M60 12H18V8h42v4zM7 0h7.071v1.016H8.016v6.055H7V0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M11.243 1.414l-.707.707 4.242 4.243.707-.707-4.242-4.243zM9.121 3.536l-.707.707 4.243 4.242.707-.707-4.243-4.242zM0 7h7.071v1.016H1.016v6.055H0V7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4.243 8.414l-.707.707 4.242 4.243.707-.707-4.242-4.243zM2.121 10.536l-.707.707 4.243 4.242.707-.707-4.243-4.242z"
}));

export default SvgComponent;