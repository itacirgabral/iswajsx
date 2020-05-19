function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 60,
  height: 16
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M60 4H18v4h42V4zM16 9V1.929h-1.016v6.055H8.929V9H16z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14.586 4.757l-.707.707-4.243-4.242.707-.707 4.243 4.242zM12.464 6.879l-.707.707-4.242-4.243.707-.707 4.242 4.243zM9 16V8.929H7.984v6.055H1.929V16H9z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7.586 11.757l-.707.707-4.243-4.242.707-.707 4.243 4.242zM5.464 13.879l-.707.707-4.242-4.243.707-.707 4.242 4.243z"
}));

export default SvgComponent;