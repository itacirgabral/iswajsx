function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 56,
  height: 13
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M14 13h42V9H14v4zM8.793 7.914l-.707-.707-4.95 4.95.707.707 4.95-4.95z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7.732 8.268a2.5 2.5 0 103.536-3.536 2.5 2.5 0 00-3.536 3.536zM3.207 5.086l.707.707 4.95-4.95-.707-.707-4.95 4.95z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5 6.5a2.5 2.5 0 10-5 0 2.5 2.5 0 005 0z"
}));

export default SvgComponent;