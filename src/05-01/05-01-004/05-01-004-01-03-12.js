function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 54,
  height: 15
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M12 13h42V9H12v4zM8 15V7.929H6.984v6.055H.929V15H8z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5.525 11.818l-.707.707L.575 8.282l.707-.707 4.243 4.243zM5 0v7.071h1.016V1.016h6.055V0H5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7.475 3.182l.707-.707 4.243 4.243-.707.707-4.243-4.243z"
}));

export default SvgComponent;