function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 60,
  height: 16
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 12h42V8H0v4zM53 0h-7.071v1.016h6.055v6.055H53V0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M48.757 1.414l.707.707-4.242 4.243-.707-.707 4.242-4.243zM50.879 3.536l.707.707-4.243 4.242-.707-.707 4.243-4.242zM60 7h-7.071v1.016h6.055v6.055H60V7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M55.757 8.414l.707.707-4.242 4.243-.707-.707 4.242-4.243zM57.879 10.536l.707.707-4.243 4.242-.707-.707 4.243-4.242z"
}));

export default SvgComponent;