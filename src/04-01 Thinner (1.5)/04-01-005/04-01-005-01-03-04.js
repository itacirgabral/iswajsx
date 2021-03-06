function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 43,
  height: 42
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M17.5 7C7.835 7 0 14.835 0 24.5S7.835 42 17.5 42 35 34.165 35 24.5 27.165 7 17.5 7zm0 1.5c8.837 0 16 7.163 16 16s-7.163 16-16 16-16-7.163-16-16 7.163-16 16-16zM34.807 0v7.07h-1.016V1.017h-6.055V0h7.071z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M32.332 3.182l-.707-.707-4.242 4.242.707.707 4.242-4.242zM35.514 14.849h7.071v-1.016h-6.054V7.778h-1.017v7.071z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M38.696 12.374l-.707-.707 4.243-4.243.707.707-4.243 4.243z"
}));

export default SvgComponent;