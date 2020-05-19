function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 14,
  height: 22
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 0v22h14V0L7 7 0 0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2 4.813V10H0v2h2v8h6v-8h6v-2H8V8.844l-1 1-5-5.031z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2 14h5v3H2z"
}));

export default SvgComponent;