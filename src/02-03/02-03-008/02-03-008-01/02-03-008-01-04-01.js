function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 16,
  height: 14
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 0v14h16v-2H2V0H0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5 0v9h11V7H7V0H5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2 0v12h14V9H5V0H2z",
  fill: "#fff"
}));

export default SvgComponent;