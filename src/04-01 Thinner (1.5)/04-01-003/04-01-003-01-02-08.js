function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 35,
  height: 48
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M17.5 13C7.835 13 0 20.835 0 30.5S7.835 48 17.5 48 35 40.165 35 30.5 27.165 13 17.5 13zm0 1.5c8.837 0 16 7.163 16 16s-7.163 16-16 16-16-7.163-16-16 7.163-16 16-16zM27 0v7.071h-1.016V1.016h-6.055V0H27z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M25.586 4.243l-.707-.707-4.243 4.242.707.707 4.243-4.242zM23.464 2.121l-.707-.707-4.242 4.243.707.707 4.242-4.243zM34.778 7.778v7.071h-1.016V8.795h-6.055V7.778h7.071z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M33.364 12.02l-.707-.706-4.243 4.242.707.707 4.243-4.242zM31.243 9.9l-.707-.708-4.243 4.243.707.707L31.243 9.9z"
}));

export default SvgComponent;