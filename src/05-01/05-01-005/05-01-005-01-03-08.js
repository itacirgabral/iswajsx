function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 56,
  height: 13
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M42 13H0V9h42v4zM52.793 7.914l-.707-.707-4.95 4.95.707.707 4.95-4.95z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M51.732 8.268a2.5 2.5 0 103.536-3.536 2.5 2.5 0 00-3.536 3.536zM47.207 5.086l.707.707 4.95-4.95-.707-.707-4.95 4.95z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M49 6.5a2.5 2.5 0 10-5 0 2.5 2.5 0 005 0z"
}));

export default SvgComponent;