function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 15,
  height: 19
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 4h15v15H0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7 1C6 1 6 2 6 2v2h3V2c0-1-1-1-1-1H7zM2 6v2H0v3h2v6h11v-6h2V8h-2V6H2z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10 4V2s0 2 0 0-2-2-2-2H7s2 0 0 0-2 2-2 2v2h1V2s0 1 0 0 1-1 1-1h1S7 1 8 1s1 1 1 1v2h1z",
  fillRule: "evenodd"
}));

export default SvgComponent;