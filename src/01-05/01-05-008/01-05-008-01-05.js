function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 15,
  height: 25
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M8 25V1s7 0 7 7v9c0 8-7 8-7 8z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9 3v20s1.815.002 3-1.844V4.531C10.815 3.001 9 3 9 3z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4 0C0 0 .126 3.787 0 4h2c0-2 2-2 2-2h2V0H4zM4 5S0 5 0 9h2c.083-.1 0-2 2-2h2V5H4zM4 10s-4 0-4 4h2c.083.015 0-2 2-2h2v-2H4zM4 15s-4 0-4 4h2c-.043.065 0-2 2-2h2v-2H4zM0 21c0 4 4 4 4 4h2v-2H4c-2 0-1.98-1.851-2-2H0z"
}));

export default SvgComponent;