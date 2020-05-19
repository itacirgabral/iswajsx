function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 60,
  height: 23
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M60 7H18v4h42V7zM23 14v7.071h-1.016v-6.055h-6.055V14H23z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M21.586 18.243l-.707-.707-4.243 4.242.707.707 4.243-4.242zM19.464 16.121l-.707-.707-4.242 4.243.707.707 4.242-4.243zM16 7v7.071h-1.016V8.016H8.929V7H16z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14.586 11.243l-.707-.707-4.243 4.242.707.707 4.243-4.242zM12.464 9.121l-.707-.707-4.242 4.243.707.707 4.242-4.243zM9-.071V7H7.984V.945H1.929V-.07H9z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7.586 4.172l-.707-.708-4.243 4.243.707.707 4.243-4.242zM5.464 2.05l-.707-.707L.515 5.586l.707.707L5.464 2.05z"
}));

export default SvgComponent;