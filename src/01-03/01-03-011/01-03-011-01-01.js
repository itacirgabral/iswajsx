function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 23,
  height: 24
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M8 9h15v15H8z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M10 11h11v11H10z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8 9V8s0 1 0 0-1-1-1-1H3s1 0 0 0-1 1-1 1v3H0V8s0 3 0 0 3-3 3-3h4S4 5 7 5s3 3 3 3v1H8z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2 4H0s0 4 0 0 4-4 4-4h6s-4 0 0 0 4 4 4 4v5h-2V4s0 2 0 0-2-2-2-2H4s2 0 0 0-1.947 1.995-2 2zM8 24H3s3 0 0 0-3-3-3-3v-3h2v3s0-1 0 0 1 1 1 1h5v2z"
}));

export default SvgComponent;