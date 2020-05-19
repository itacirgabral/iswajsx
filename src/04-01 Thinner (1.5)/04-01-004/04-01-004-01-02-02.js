function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 35,
  height: 45
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M17.5 10C7.835 10 0 17.835 0 27.5S7.835 45 17.5 45 35 37.165 35 27.5 27.165 10 17.5 10zm0 1.5c8.837 0 16 7.163 16 16s-7.163 16-16 16-16-7.163-16-16 7.163-16 16-16zM14.188 0L8 6.188l.719.687L14.875.687 14.187 0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14.875.688L8.719 6.875l1.406 1.438 6.188-6.188L14.874.687z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16.313 2.125l-6.188 6.188.688.687L17 2.812l-.688-.687zM24.188 0L18 6.188l.719.687L24.875.687 24.187 0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M24.875.688l-6.156 6.187 1.406 1.438 6.188-6.188L24.875.687z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M26.313 2.125l-6.188 6.188.688.687L27 2.812l-.688-.687z"
}));

export default SvgComponent;