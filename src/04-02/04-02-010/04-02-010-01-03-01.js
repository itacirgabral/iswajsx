function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 9,
  height: 6
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 5V0h1v4h4v1H0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5.5 0a3.48 3.48 0 00-2.469 1.031l-1 1 .719.719 1-1C4.202 1.298 4.81 1 5.5 1A2.5 2.5 0 018 3.5V6h1V3.5A3.5 3.5 0 005.5 0z"
}));

export default SvgComponent;