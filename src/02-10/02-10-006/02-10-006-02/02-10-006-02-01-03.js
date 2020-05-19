function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 21,
  height: 20
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M15 14c-2.761 0-5-3.134-5-7s2.239-7 5-7 5 3.134 5 7-2.239 7-5 7zm0-1.5v-11c-1.933 0-3.5 2.462-3.5 5.5s1.567 5.5 3.5 5.5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M15 1.5a3.5 5.5 0 100 11V7z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3 10v8l8-8H3zM14 20a6.963 6.963 0 01-4.938-2.063L6.22 14.781l1.375-1.375 2.875 3.125a4.978 4.978 0 007.062 0l2.063-2.312L21 15.625l-2.063 2.313A6.963 6.963 0 0114 20z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 7v8l8-8H0z"
}));

export default SvgComponent;