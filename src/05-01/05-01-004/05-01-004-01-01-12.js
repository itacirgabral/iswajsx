function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 52,
  height: 9
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M52 4H10V0h42v4zM8 9V1.929H6.984v6.055H.929V9H8z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5.525 5.818l-.707.707L.575 2.282l.707-.707 4.243 4.243z"
}));

export default SvgComponent;