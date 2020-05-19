function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 25,
  height: 35
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M15 20a5 5 0 015 5v2a5 5 0 01-5 5v-3a3 3 0 003-3v-2a3 3 0 00-3-3H6v-1h9zM6 15v11L.5 20.5 6 15z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M13 0h1v35h-1V0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2 5v1h13a3 3 0 013 3v5h3v-4a5 5 0 00-5-5H2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10 0h3v35h-3V0z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14 14h11l-5.5 5.5L14 14zM9 0h1v35H9V0z"
}));

export default SvgComponent;