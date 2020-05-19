function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 24,
  height: 26
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M11 0L6.5 4.5 11 9V0zm-1 2.438v4.124L7.906 4.5 10 2.437zM24 14c0-5.523-4.477-10-10-10h-3v1h3a9 9 0 019 9v6h1v-6z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10 2.438L7.906 4.5 10 6.563V2.438z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5 6L.5 10.5 5 15V6zM4 8.438v4.124L1.906 10.5 4 8.437zM18 20c0-5.523-4.477-10-10-10H5v1h3a9 9 0 019 9v6h1v-6z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4 8.438L1.906 10.5 4 12.563V8.436z",
  fill: "#fff"
}));

export default SvgComponent;