function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 15,
  height: 19
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 4h15v15H0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 4V2s0 2 0 0 2-2 2-2h1S1 0 3 0s2 2 2 2v2H4V2s0 1 0 0-1-1-1-1H2s1 0 0 0-1 1-1 1v2H0z",
  fillRule: "evenodd"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2 1C1 1 1 2 1 2v2h3V2.375 2c0-1-1-1-1-1h-.625H2zm3.844 0C5.563 1.047 5 1.25 5 2v2h3V2s0-1-1-1H6a.42.42 0 00-.156 0z",
  fill: "#fff",
  fillRule: "evenodd"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9 4V2s0 2 0 0-2-2-2-2H6s2 0 0 0-2 2-2 2v2h1V2s0 1 0 0 1-1 1-1h1S6 1 7 1s1 1 1 1v2h1z",
  fillRule: "evenodd"
}));

export default SvgComponent;