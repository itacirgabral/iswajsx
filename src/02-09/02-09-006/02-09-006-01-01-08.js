function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 20,
  height: 34
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M15 6a5 5 0 015 5v2a5 5 0 01-5 5v-3a3 3 0 003-3v-2a3 3 0 00-3-3H6V6h9zM6 1v11L.5 6.5 6 1z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M13 0h1v34h-1V0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M15 19a5 5 0 015 5v2a5 5 0 01-5 5v-3a3 3 0 003-3v-2a3 3 0 00-3-3H6v-1h9z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10 0h3v34h-3V0z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6 14v11L.5 19.5 6 14zM9 0h1v34H9V0z"
}));

export default SvgComponent;