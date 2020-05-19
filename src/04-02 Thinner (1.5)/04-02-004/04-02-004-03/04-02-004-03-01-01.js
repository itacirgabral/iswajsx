function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 35,
  height: 35
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M17.5 0C7.835 0 0 7.835 0 17.5S7.835 35 17.5 35 35 27.165 35 17.5 27.165 0 17.5 0zm0 1.5c8.837 0 16 7.163 16 16s-7.163 16-16 16-16-7.163-16-16 7.163-16 16-16z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7 10c0 2.21 2.015 4 4.5 4s4.5-1.79 4.5-4h-1c0 1.38-1.567 2.5-3.5 2.5S8 11.38 8 10H7zM19 10c0 2.21 2.015 4 4.5 4s4.5-1.79 4.5-4h-1c0 1.38-1.567 2.5-3.5 2.5S20 11.38 20 10h-1z"
}));

export default SvgComponent;