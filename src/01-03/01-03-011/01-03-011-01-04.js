function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 23,
  height: 24
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M8 11h15v13H8z"
}), /*#__PURE__*/React.createElement("rect", {
  width: 11,
  height: 9,
  x: 10,
  y: 13,
  ry: 0,
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8 9V8s0 1 0 0-1-1-1-1H3s1 0 0 0-1 1-1 1v3H0V8s0 3 0 0 3-3 3-3h4S4 5 7 5s3 3 3 3v1H8z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2 4H0s0 4 0 0 4-4 4-4h6s-4 0 0 0 4 4 4 4v5h-2V4s0 2 0 0-2-2-2-2H4s2 0 0 0-1.947 1.995-2 2zM7 24H3s3 0 0 0-3-3-3-3v-3h2v3s0-1 0 0 1 1 1 1h4v2z"
}));

export default SvgComponent;