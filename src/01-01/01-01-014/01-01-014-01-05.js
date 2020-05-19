function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 17,
  height: 27
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M17 19a8 8 0 11-16 0 8 8 0 1116 0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9 13a6 6 0 00-5.656 4H1.25A8.051 8.051 0 001 19h2c0 3.312 2.688 6 6 6v-6h8c0-.688-.086-1.362-.25-2H9v-4z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M1.406.125L0 1.563 11.438 13h2.812L1.406.125z"
}));

export default SvgComponent;