function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 20,
  height: 18
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 13l4.5 4.5L9 13H0zm2.438 1h4.124L4.5 16.094 2.437 14zM14 0C8.477 0 4 4.477 4 10v3h1v-3a9 9 0 019-9h6V0h-6z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2.438 14L4.5 16.094 6.563 14H2.438z",
  fill: "#fff"
}));

export default SvgComponent;