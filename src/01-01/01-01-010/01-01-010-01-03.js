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
  d: "M1 4h3V2s0 1 0 0-1-1-1-1H2s1 0 0 0-1 1-1 1v2z",
  fill: "#fff",
  fillRule: "evenodd"
}));

export default SvgComponent;