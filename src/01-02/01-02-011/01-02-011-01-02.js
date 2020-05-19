function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 15,
  height: 27
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 12h15v15H0z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M2 14h6v11H2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M15 12V4s0 4 0 0-4-4-4-4H3v2h8s-2 0 0 0 2 2 2 2v8h2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9 12h2V7s0 3 0 0-3-3-3-3H1v2h7S7 6 8 6s1 1 1 1v5z"
}));

export default SvgComponent;