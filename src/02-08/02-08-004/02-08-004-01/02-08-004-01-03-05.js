function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 20,
  height: 35
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 27l8 8 8-8h-2l-6 6-6-6H0zM18 0v12.313a2 2 0 01-2 2 1.982 1.982 0 01-1.406-.594l-.75-.875A4.01 4.01 0 0011 11.688a4 4 0 00-4 4V21c0 2.404-4 6-4 6h10s-4-3.596-4-6v-5.313a2 2 0 012-2c.552 0 1.044.232 1.406.594l.75.875A4.01 4.01 0 0016 16.312a4 4 0 004-4V0h-2z"
}));

export default SvgComponent;