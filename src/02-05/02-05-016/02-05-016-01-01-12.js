function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 23,
  height: 19
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M19 2c0 7.18-5.82 13-13 13v-1c6.627 0 12-5.373 12-12V0h1v2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M18 2c0 6.627-5.373 12-12 12v-3a9 9 0 009-9V0h3v2z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M17.435 14.849L4 1.414 5.414 0 18.85 13.435l-1.414 1.414z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M15 2a9 9 0 01-9 9v-1a8 8 0 008-8V0h1v2zM6 7L.5 12.5 6 18V7zM23 9.1L13.1 19H23V9.1z"
}));

export default SvgComponent;