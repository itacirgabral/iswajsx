function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 11,
  height: 10
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M7.489 1.597c-.165-.096-.312-.239-.486-.31A4.012 4.012 0 005.5.979c-.512 0-1.021.114-1.503.31a4.014 4.014 0 00-1.325.884c-.391.39-.689.844-.884 1.325-.196.482-.31.991-.31 1.503 0 .512.114 1.021.31 1.503.07.174.213.321.31.486l5.39-5.392z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5.5 0a5 5 0 100 10 5 5 0 000-10zm0 1a4 4 0 110 8 4 4 0 010-8z"
}));

export default SvgComponent;