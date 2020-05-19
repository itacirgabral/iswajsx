function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 40,
  height: 45
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M17.5 10C7.835 10 0 17.835 0 27.5S7.835 45 17.5 45 35 37.165 35 27.5 27.165 10 17.5 10zm0 1.5c8.837 0 16 7.163 16 16s-7.163 16-16 16-16-7.163-16-16 7.163-16 16-16zM23.737 8.485h7.071V7.47h-6.055V1.414h-1.016v7.071z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M27.98 7.071l-.707-.707 4.242-4.243.707.707-4.242 4.243zM25.858 4.95l-.707-.707L29.394 0l.707.707-4.243 4.243zM31.515 16.263h7.071v-1.016h-6.054V9.192h-1.017v7.071z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M35.758 14.85l-.707-.708L39.293 9.9l.707.708-4.242 4.242zM33.636 12.728l-.707-.707 4.243-4.243.707.707-4.243 4.243z"
}));

export default SvgComponent;