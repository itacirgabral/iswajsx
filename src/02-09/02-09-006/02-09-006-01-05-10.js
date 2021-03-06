function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 26,
  height: 24
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M26 13l-4.5 4.5L17 13h9zm-2.438 1h-4.125l2.063 2.094L23.563 14zM12 0c5.523 0 10 4.477 10 10v3h-1v-3a9 9 0 00-9-9H6V0h6z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M23.563 14L21.5 16.094 19.437 14h4.125z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M20 19l-4.5 4.5L11 19h9zm-2.438 1h-4.125l2.063 2.094L17.563 20zM6 6c5.523 0 10 4.477 10 10v3h-1v-3a9 9 0 00-9-9H0V6h6z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M17.563 20L15.5 22.094 13.437 20h4.126z",
  fill: "#fff"
}));

export default SvgComponent;