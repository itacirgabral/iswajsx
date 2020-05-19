function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 35,
  height: 35
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M17.5 0C7.835 0 0 7.835 0 17.5S7.835 35 17.5 35 35 27.165 35 17.5 27.165 0 17.5 0zm0 1.5c8.837 0 16 7.163 16 16s-7.163 16-16 16-16-7.163-16-16 7.163-16 16-16z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M20 24.5a2.5 2.5 NaN 11-5 0 2.5 2.5 NaN 115 0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M17 19h1v11h-1z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M21.035 20.257l.707.707-7.778 7.778-.707-.707z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M13.257 20.964l.707-.707 7.778 7.778-.707.707z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 25v-1h11v1z"
}));

export default SvgComponent;