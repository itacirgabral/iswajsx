function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 33,
  height: 34
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M8 0L0 8h2.719l5.219-5.25L13.188 8H16L8 0zM4 8v26h29V8h-2v24H6V8H4z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10 8v20h17V8h-2v18H12V8h-2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6 8v24h25V8h-4v20H10V8H6z",
  fill: "#fff"
}));

export default SvgComponent;