function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 11,
  height: 10
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M4.5 1.188c-.184.048-.39.051-.562.125-.48.202-.92.481-1.282.843a4.012 4.012 0 00-.843 1.282A4.014 4.014 0 001.5 5c0 .552.11 1.084.313 1.563.202.478.481.919.843 1.28.362.363.803.642 1.282.844.173.074.378.077.562.125V1.187z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5.5 0a5 5 0 100 10 5 5 0 000-10zm0 1a4 4 0 110 8 4 4 0 010-8z"
}));

export default SvgComponent;