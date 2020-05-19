function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 15,
  height: 19
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 4h15v15H0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10 1C9 1 9 2 9 2v2h3V2c0-.75-.563-.953-.844-1C11.062.984 11 1 11 1h-1zM0 8v3h15V8H0z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M13 4V2s0 2 0 0-2-2-2-2h-1s2 0 0 0-2 2-2 2v2h1V2s0 1 0 0 1-1 1-1h1s-1 0 0 0 1 1 1 1v2h1z",
  fillRule: "evenodd"
}));

export default SvgComponent;