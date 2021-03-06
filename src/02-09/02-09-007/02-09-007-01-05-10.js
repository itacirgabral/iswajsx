function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 28,
  height: 20
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M28 13l-4.5 4.5L19 13h9zm-2.438 1h-4.125l2.063 2.094L25.563 14zM14 0c5.523 0 10 4.477 10 10v3h-1v-3a9 9 0 00-9-9H8V0h6z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M25.563 14L23.5 16.094 21.437 14h4.125z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5 2L.5 6.5 5 11V2zM4 4.438v4.125L1.906 6.5 4 4.437zM8 6c5.523 0 10 4.477 10 10v4h-1v-4a9 9 0 00-9-9H5V6h3z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4 4.438L1.906 6.5 4 8.563V4.436z",
  fill: "#fff"
}));

export default SvgComponent;