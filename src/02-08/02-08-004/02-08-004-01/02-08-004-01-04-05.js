function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 13,
  height: 27
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M11 0v12.313a2 2 0 01-2 2 1.982 1.982 0 01-1.406-.594l-.75-.875A4.01 4.01 0 004 11.688a4 4 0 00-4 4V27h2V15.687a2 2 0 012-2c.552 0 1.044.232 1.406.594l.75.875A4.01 4.01 0 009 16.312a4 4 0 004-4V0h-2z"
}));

export default SvgComponent;