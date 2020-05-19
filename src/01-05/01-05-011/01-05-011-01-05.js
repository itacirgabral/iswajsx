function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 16,
  height: 24
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M9 24V0s7 0 7 7v9c0 8-7 8-7 8z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10 2v20s1.815.002 3-1.844V3.531C11.815 2.001 10 2 10 2z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7 1.156L0 5.188l1 1.75 6-3.47V1.157zM7 4.156L0 8.188l1 1.75 6-3.47V4.157zM0 11v2h7v-2H0zM1 14.063l-1 1.75 7 4.03v-2.312l-6-3.468zM1 17.063l-1 1.75 7 4.03v-2.312l-6-3.468z"
}));

export default SvgComponent;