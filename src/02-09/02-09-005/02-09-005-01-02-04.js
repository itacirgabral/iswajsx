function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 19,
  height: 24
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M10 0h1v24h-1V0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7 0h3v24H7V0z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6 0h1v24H6V0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5 6a5 5 0 00-5 5v2a5 5 0 005 5h8v-3H5a3 3 0 01-3-3v-2a3 3 0 013-3V6zM13 11v11l5.5-5.5L13 11zm1 2.438l3.063 3.062L14 19.563v-6.125z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14 13.438v6.124l3.063-3.062L14 13.437z",
  fill: "#fff"
}));

export default SvgComponent;