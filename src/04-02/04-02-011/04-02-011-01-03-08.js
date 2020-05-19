function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 10,
  height: 10
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M5 0H0v1h4v4h1V0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 5c0-1.38.564-2.626 1.469-3.531l.687.687A4.01 4.01 0 001 5a4 4 0 108 0 3.975 3.975 0 00-2.219-3.563L7.22.563C8.853 1.385 10 3.046 10 5A5 5 0 010 5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2 5c0-.828.332-1.582.875-2.125l.719.719A1.982 1.982 0 003 5a2 2 0 102.906-1.781l.438-.875C7.319 2.839 8 3.83 8 5a3 3 0 01-6 0z"
}));

export default SvgComponent;