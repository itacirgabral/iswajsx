function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 59,
  height: 15
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M59 4H17V0h42v4zM15 8V.929h-1.016v6.055H7.929V8H15z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12.525 4.818l-.707.707-4.243-4.243.707-.707 4.243 4.243zM8 15V7.929H6.984v6.055H.929V15H8z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5.525 11.818l-.707.707L.575 8.282l.707-.707 4.243 4.243z"
}));

export default SvgComponent;