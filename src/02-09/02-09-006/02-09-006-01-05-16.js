function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 24,
  height: 26
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M13 0l4.5 4.5L13 9V0zm1 2.438v4.124L16.094 4.5 14 2.437zM0 14C0 8.477 4.477 4 10 4h3v1h-3a9 9 0 00-9 9v6H0v-6z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14 2.438L16.094 4.5 14 6.563V2.438z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19 6l4.5 4.5L19 15V6zm1 2.438v4.124l2.094-2.062L20 8.437zM6 20c0-5.523 4.477-10 10-10h3v1h-3a9 9 0 00-9 9v6H6v-6z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M20 8.438l2.094 2.062L20 12.563V8.436z",
  fill: "#fff"
}));

export default SvgComponent;