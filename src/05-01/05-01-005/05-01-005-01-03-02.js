function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 56,
  height: 13
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M42 13H0V9h42v4zM47.207 7.914l.707-.707 4.95 4.95-.707.707-4.95-4.95z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M48.268 8.268a2.5 2.5 0 11-3.536-3.536 2.5 2.5 0 013.536 3.536zM52.793 5.086l-.707.707-4.95-4.95.707-.707 4.95 4.95z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M51 6.5a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0z"
}));

export default SvgComponent;