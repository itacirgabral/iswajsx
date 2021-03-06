function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 31,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M14 23H0l7 7 7-7zM23.5 0a5.5 5.5 0 000 11h.5a3 3 0 010 6h-5c-.318 0-1.82-.334-2.375-.625l-2.5-1.313C12.937 14.381 12.131 14.159 11 14a5 5 0 00-5 5v4h2v-4c0-2.21 1.343-4 3-4 .763 0 1.47.377 2 1l3.156 2.844A4.01 4.01 0 0019 20h4a6 6 0 000-12c-1.699-.24-3-1.735-3-3.5A3.5 3.5 0 0123.5 1H31V0h-7.5z"
}));

export default SvgComponent;