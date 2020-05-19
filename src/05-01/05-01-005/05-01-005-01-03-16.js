function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 56,
  height: 13
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M14 13h42V9H14v4zM3.207 7.914l.707-.707 4.95 4.95-.707.707-4.95-4.95z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4.268 8.268A2.5 2.5 0 11.732 4.732a2.5 2.5 0 013.536 3.536zM8.793 5.086l-.707.707-4.95-4.95.707-.707 4.95 4.95z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7 6.5a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0z"
}));

export default SvgComponent;