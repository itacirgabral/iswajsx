function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 9,
  height: 15
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M4 15h1V0H4v15zM0 8a4 4 0 004 4v-1a3 3 0 01-3-3V7a3 3 0 013-3V3a4 4 0 00-4 4v1z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M1 8a3 3 0 003 3V4a3 3 0 00-3 3v1z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9 8a4 4 0 01-4 4v-1a3 3 0 003-3V7a3 3 0 00-3-3V3a4 4 0 014 4v1z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8 8a3 3 0 01-3 3V4a3 3 0 013 3v1z",
  fill: "#fff"
}));

export default SvgComponent;