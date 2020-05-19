function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 24,
  height: 26
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M11 26l-4.5-4.5L11 17v9zm-1-2.438v-4.125L7.906 21.5 10 23.563zM24 12c0 5.523-4.477 10-10 10h-3v-1h3a9 9 0 009-9V6h1v6z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10 23.563L7.906 21.5 10 19.437v4.125z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5 20L.5 15.5 5 11v9zm-1-2.438v-4.125L1.906 15.5 4 17.563zM18 6c0 5.523-4.477 10-10 10H5v-1h3a9 9 0 009-9V0h1v6z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4 17.563L1.906 15.5 4 13.437v4.126z",
  fill: "#fff"
}));

export default SvgComponent;