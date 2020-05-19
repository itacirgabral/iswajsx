function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 20,
  height: 35
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M20 27l-8 8-8-8h2l6 6 6-6h2zM2 0v12.313a2 2 0 002 2c.552 0 1.044-.232 1.406-.594l.75-.875A4.01 4.01 0 019 11.688a4 4 0 014 4V21c0 2.404 4 6 4 6H7s4-3.596 4-6v-5.313a2 2 0 00-2-2c-.552 0-1.044.232-1.406.594l-.75.875A4.01 4.01 0 014 16.312a4 4 0 01-4-4V0h2z"
}));

export default SvgComponent;