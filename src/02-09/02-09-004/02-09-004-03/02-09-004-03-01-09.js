function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 50,
  height: 21
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M50 14H36l7 7 7-7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M36 0a8 8 0 018 8v6h-2V8a6 6 0 00-12 0v3.5a8.5 8.5 0 01-17 0v-4a5.5 5.5 0 00-11 0V18H0V7.5a7.5 7.5 0 1115 0v4c0 2.485 2.91 4.5 6.5 4.5s6.5-2.015 6.5-4.5V8a8 8 0 018-8z"
}));

export default SvgComponent;