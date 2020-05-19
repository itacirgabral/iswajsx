function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 15,
  height: 23
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 8h15v15H0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2 10v2H0v3h2v6h11v-6h2v-3h-2v-2H2z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4 8h2V3s0 1 0 0 1-1 1-1h6V0H7s3 0 0 0-3 3-3 3v5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8 4h4v4H8z"
}));

export default SvgComponent;