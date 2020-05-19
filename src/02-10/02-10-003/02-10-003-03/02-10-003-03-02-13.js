function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 15,
  height: 40
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 17l5.5 5.5L11 17H0zm2.438 1h6.124L5.5 21.063 2.437 18z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10.5 40c2.485 0 4.5-3.806 4.5-8.5v-23C15 3.806 12.985 0 10.5 0h-2C6.015 0 3 3.806 3 8.5V16h5V8.5C8 4.358 9.12 2 10.5 2S13 4.358 13 8.5v23c0 4.142-1.12 6.5-2.5 6.5S8 35.642 8 31.5v-8H3v8C3 36.194 6.015 40 8.5 40h2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2.438 18L5.5 21.063 8.563 18H2.436z",
  fill: "#fff"
}));

export default SvgComponent;