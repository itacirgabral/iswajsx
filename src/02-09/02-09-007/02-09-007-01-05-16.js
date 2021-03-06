function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 20,
  height: 28
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M13 0l4.5 4.5L13 9V0zm1 2.438v4.124L16.094 4.5 14 2.437zM0 14C0 8.477 4.477 4 10 4h3v1h-3a9 9 0 00-9 9v6H0v-6z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14 2.438L16.094 4.5 14 6.563V2.438z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2 23l4.5 4.5L11 23H2zm2.438 1h4.125L6.5 26.094 4.437 24zM6 20c0-5.523 4.477-10 10-10h4v1h-4a9 9 0 00-9 9v3H6v-3z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4.438 24L6.5 26.094 8.563 24H4.436z",
  fill: "#fff"
}));

export default SvgComponent;