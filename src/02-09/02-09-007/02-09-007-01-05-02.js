function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 28,
  height: 20
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 13l4.5 4.5L9 13H0zm2.438 1h4.124L4.5 16.094 2.437 14zM14 0C8.477 0 4 4.477 4 10v3h1v-3a9 9 0 019-9h6V0h-6z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2.438 14L4.5 16.094 6.563 14H2.438z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M23 2l4.5 4.5L23 11V2zm1 2.438v4.125L26.094 6.5 24 4.437zM20 6c-5.523 0-10 4.477-10 10v4h1v-4a9 9 0 019-9h3V6h-3z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M24 4.438L26.094 6.5 24 8.563V4.436z",
  fill: "#fff"
}));

export default SvgComponent;