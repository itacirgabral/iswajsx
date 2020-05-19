function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 11,
  height: 59
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M1 7v52h8V7H1z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M1 2v5h8V2H1z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3.5 0C0 0 0 4 0 4h2s0-2 1.5-2 1.5 2 4 2C11 4 11 0 11 0H9s0 2-1.5 2-1.5-2-4-2z"
}));

export default SvgComponent;