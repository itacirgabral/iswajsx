function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 10,
  height: 10
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 5V0h1v4h4v1H0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5 0C3.62 0 2.374.564 1.469 1.469l.687.687A4.01 4.01 0 015 1a4 4 0 110 8 3.975 3.975 0 01-3.563-2.219l-.875.438C1.385 8.853 3.046 10 5 10A5 5 0 005 0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5 2c-.828 0-1.582.332-2.125.875l.719.719A1.982 1.982 0 015 3a2 2 0 11-1.781 2.906l-.875.438C2.839 7.319 3.83 8 5 8a3 3 0 000-6z"
}));

export default SvgComponent;