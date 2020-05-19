function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 57,
  height: 15
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M15 11h42V7H15v4zM5 15V7.929h1.016v6.055h6.055V15H5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7.475 11.818l.707.707 4.243-4.243-.707-.707-4.243 4.243zM8 0v7.071H6.984V1.016H.929V0H8z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5.525 3.182l-.707-.707L.575 6.718l.707.707 4.243-4.243z"
}));

export default SvgComponent;