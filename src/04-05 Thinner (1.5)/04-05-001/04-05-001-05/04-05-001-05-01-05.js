function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 35,
  height: 35
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M17.5 0C7.835 0 0 7.835 0 17.5S7.835 35 17.5 35 35 27.165 35 17.5 27.165 0 17.5 0zm0 1.5c8.837 0 16 7.163 16 16s-7.163 16-16 16-16-7.163-16-16 7.163-16 16-16z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M17.5 20a5 5 0 100 10 5 5 0 000-10zm0 1a4 4 0 110 8 4 4 0 010-8z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M13.688 26c.048.184.051.39.124.563.203.478.482.919.844 1.28.362.363.803.642 1.282.844.478.203 1.01.313 1.562.313s1.084-.11 1.563-.313c.478-.202.919-.481 1.28-.843.363-.362.642-.803.844-1.282.074-.173.077-.378.125-.562h-7.625z"
}));

export default SvgComponent;