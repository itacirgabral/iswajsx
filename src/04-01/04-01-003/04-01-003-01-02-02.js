function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 35,
  height: 48
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M17.5 13C7.835 13 0 20.835 0 30.5S7.835 48 17.5 48 35 40.165 35 30.5 27.165 13 17.5 13zm0 2C26.06 15 33 21.94 33 30.5 33 39.06 26.06 46 17.5 46 8.94 46 2 39.06 2 30.5 2 21.94 8.94 15 17.5 15zM8 0v7.071h1.016V1.016h6.055V0H8z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9.414 4.243l.707-.707 4.243 4.242-.707.707-4.243-4.242zM11.536 2.121l.707-.707 4.242 4.243-.707.707-4.242-4.243zM.222 7.778v7.071h1.016V8.795h6.055V7.778H.222z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M1.636 12.02l.707-.706 4.243 4.242-.707.707-4.243-4.242zM3.757 9.9l.707-.708 4.243 4.243-.707.707L3.757 9.9z"
}));

export default SvgComponent;