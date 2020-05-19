function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 20,
  height: 24
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M5 6a5 5 0 00-5 5v2a5 5 0 005 5v-3a3 3 0 01-3-3v-2a3 3 0 013-3h9V6H5zM14 1l5.5 5.5L14 12V1zm1 2.438v6.124L18.063 6.5 15 3.437z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7 0H6v24h1V0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10 0H7v24h3V0z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M11 0h-1v24h1V0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M15 3.438L18.063 6.5 15 9.563V3.436z",
  fill: "#fff"
}));

export default SvgComponent;