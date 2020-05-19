function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 32,
  height: 15
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M10.5 9.5L16 4v11l-5.5-5.5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 5c0-2.761 5.373-5 12-5h9c6.075 0 11 2.015 11 4.5v2c0 2.448-3.775 4.505-9 5.219V6.656c4.176-.431 7-1.232 7-2.156C30 3.12 23.732 2 16 2S2 3.12 2 4.5c0 .96 3.047 1.773 7.5 2.188v5.156C4.071 11.172 0 8.366 0 5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16.5 9.5L22 4v11l-5.5-5.5z"
}));

export default SvgComponent;