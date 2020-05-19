function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 20,
  height: 34
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M5 6a5 5 0 00-5 5v2a5 5 0 005 5v-3a3 3 0 01-3-3v-2a3 3 0 013-3h9V6H5zM14 1v11l5.5-5.5L14 1z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7 0H6v34h1V0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5 19a5 5 0 00-5 5v2a5 5 0 005 5v-3a3 3 0 01-3-3v-2a3 3 0 013-3h9v-1H5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10 0H7v34h3V0z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14 14v11l5.5-5.5L14 14zM11 0h-1v34h1V0z"
}));

export default SvgComponent;