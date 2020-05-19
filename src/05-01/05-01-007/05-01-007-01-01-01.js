function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 42,
  height: 14
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M42 10H0v4h42v-4zM11 2v6h6V7h-5V2h-1z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M21 3a8.725 8.725 0 00-6.25 2.625l.719.719A7.707 7.707 0 0121 4c2.172 0 4.124.904 5.531 2.344L28.156 8l.719-.719-1.625-1.656A8.725 8.725 0 0021 3z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M21 1a10.704 10.704 0 00-7.625 3.188l1.375 1.437A8.725 8.725 0 0121 3a8.725 8.725 0 016.25 2.625l1.625 1.656 1.406-1.406-1.656-1.688A10.704 10.704 0 0021 1z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M21 0a11.72 11.72 0 00-8.344 3.469l.719.719A10.704 10.704 0 0121 1c2.985 0 5.677 1.223 7.625 3.188l1.656 1.687.719-.719-1.656-1.687A11.72 11.72 0 0021 0z"
}));

export default SvgComponent;