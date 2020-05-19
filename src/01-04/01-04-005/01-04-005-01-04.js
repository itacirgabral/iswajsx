function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 14,
  height: 22
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 0v22h14V0L7 7 0 0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2 4.813V10H0v2h2v8h10v-8h2v-2h-2V4.812L7 9.845 2 4.813z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5 14h7v3H5z"
}));

export default SvgComponent;