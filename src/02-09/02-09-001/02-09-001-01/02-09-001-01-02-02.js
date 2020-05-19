function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 19,
  height: 15
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 9l5.5 5.5L11 9H0zm2.438 1h6.124L5.5 13.063 2.437 10zM9 0a5 5 0 00-5 5v4h3V4a3 3 0 013-3h9V0H9z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2.438 10L5.5 13.063 8.563 10H2.436z",
  fill: "#fff"
}));

export default SvgComponent;