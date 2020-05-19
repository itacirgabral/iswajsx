function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 25,
  height: 36
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M13 0h1v36h-1V0zM19.5 14.5L14 20h2l3.5-3.5L23 20h2l-5.5-5.5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10 0h3v36h-3V0z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9 0h1v36H9V0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19 20v5a3 3 0 01-3 3H4v3h11a5 5 0 005-5v-6h-1zM6 7L.5 12.5 6 18v-2l-3.5-3.5L6 9V7zM15 2v1a3 3 0 013 3v2a3 3 0 01-3 3H6v3h9a5 5 0 005-5V7a5 5 0 00-5-5z"
}));

export default SvgComponent;