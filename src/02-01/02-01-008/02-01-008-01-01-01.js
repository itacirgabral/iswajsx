function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 28,
  height: 13
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M3 0v3H0v2h3v3H0v2h3v3h2v-3h3v3h2v-3h3V8h-3V5h3V3h-3V0H8v3H5V0H3zm2 5h3v3H5V5z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M5 5h3v3H5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M18 0v3h-3v2h3v3h-3v2h3v3h2v-3h3v3h2v-3h3V8h-3V5h3V3h-3V0h-2v3h-3V0h-2zm2 5h3v3h-3V5z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M20 5h3v3h-3z"
}));

export default SvgComponent;