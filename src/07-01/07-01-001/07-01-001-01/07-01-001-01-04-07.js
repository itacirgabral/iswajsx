function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 11,
  height: 70
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M9 70V6H7v64h2zM3 70V6H1v64h2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M1 2v4h2v64h4V6h2V2H1z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3.5 0C0 0 0 4 0 4h2s0-2 1.5-2 1.5 2 4 2C11 4 11 0 11 0H9s0 2-1.5 2-1.5-2-4-2z"
}));

export default SvgComponent;