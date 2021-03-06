function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 11,
  height: 10
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M9.313 4c-.049-.184-.052-.39-.126-.563a4.012 4.012 0 00-.843-1.28 4.012 4.012 0 00-1.282-.844A4.014 4.014 0 005.5 1c-.552 0-1.084.11-1.563.313-.478.202-.919.481-1.28.843a4.012 4.012 0 00-.844 1.282c-.074.173-.077.378-.125.562h7.625z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5.5 0a5 5 0 100 10 5 5 0 000-10zm0 1a4 4 0 110 8 4 4 0 010-8z"
}));

export default SvgComponent;