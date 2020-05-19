function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 27,
  height: 21
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 13l8 8 8-8H0zm2.438 1h11.124L8 19.563 2.437 14zM13 0a7 7 0 00-7 7v6h4V6a4 4 0 014-4h13V0H13z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2.438 14L8 19.563 13.563 14H2.437z",
  fill: "#fff"
}));

export default SvgComponent;