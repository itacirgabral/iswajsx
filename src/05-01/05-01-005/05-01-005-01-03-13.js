function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 55,
  height: 11
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M55 6H13v4h42V6zM2 4h1v7H2V4z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5 2.5a2.5 2.5 0 11-5 0 2.5 2.5 0 115 0zM8 7h1V0H8v7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M11 8.5a2.5 2.5 0 10-5 0 2.5 2.5 0 105 0z"
}));

export default SvgComponent;