function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 24,
  height: 26
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 6l6 6 6-6H0zm2.438 1h7.124L6 10.563 2.437 7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M11 0a6 6 0 00-6 6h2a4 4 0 118 0v1a4.01 4.01 0 01-1.156 2.844L8.75 14.75A5.992 5.992 0 007 19v1a6 6 0 006 6h3a8 8 0 008-8h-8c0 2.761-1.343 5-3 5-2.21 0-4-1.343-4-3v-1a4.01 4.01 0 011.156-2.844l5.094-4.906A5.992 5.992 0 0017 7V6a6 6 0 00-6-6z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2.438 7L6 10.563 9.563 7H2.436z",
  fill: "#fff"
}));

export default SvgComponent;