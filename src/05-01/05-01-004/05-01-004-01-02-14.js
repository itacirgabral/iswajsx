function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 56,
  height: 15
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M56 4H14V0h42v4zM0 8V.929h1.016v6.055h6.055V8H0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2.475 4.818l.707.707 4.243-4.243-.707-.707-4.243 4.243zM7 15V7.929h1.016v6.055h6.055V15H7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9.475 11.818l.707.707 4.243-4.243-.707-.707-4.243 4.243z"
}));

export default SvgComponent;