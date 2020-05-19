function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 40,
  height: 45
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M22.5 10C12.835 10 5 17.835 5 27.5S12.835 45 22.5 45 40 37.165 40 27.5 32.165 10 22.5 10zm0 1.5c8.837 0 16 7.163 16 16s-7.163 16-16 16-16-7.163-16-16 7.163-16 16-16zM16.263 8.485h-7.07V7.47h6.054V1.414h1.016v7.071z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12.02 7.071l.708-.707-4.243-4.243-.707.707 4.243 4.243zM14.142 4.95l.707-.707L10.607 0l-.708.707 4.243 4.243zM8.485 16.263h-7.07v-1.016h6.054V9.192h1.016v7.071z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4.243 14.85l.707-.708L.707 9.9 0 10.607l4.243 4.242zM6.364 12.728l.707-.707-4.243-4.243-.707.707 4.243 4.243z"
}));

export default SvgComponent;