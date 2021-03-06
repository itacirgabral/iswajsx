function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 35,
  height: 45
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M17.5 10C7.835 10 0 17.835 0 27.5S7.835 45 17.5 45 35 37.165 35 27.5 27.165 10 17.5 10zm0 1.5c8.837 0 16 7.163 16 16s-7.163 16-16 16-16-7.163-16-16 7.163-16 16-16zM15.813 0l-.688.688 6.156 6.187.719-.688L15.812 0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M15.125.688l-1.438 1.437 6.188 6.188 1.406-1.438L15.125.687z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M13.688 2.125L13 2.813 19.188 9l.687-.688-6.188-6.187z"
}));

export default SvgComponent;