function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 15,
  height: 19
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 4h15v15H0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3.844 1C3.563 1.047 3 1.25 3 2v2h3V2s0-1-1-1H4s-.063-.016-.156 0zM2 6v11h6V6H2z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7 4V2s0 2 0 0-2-2-2-2H4s2 0 0 0-2 2-2 2v2h1V2s0 1 0 0 1-1 1-1h1S4 1 5 1s1 1 1 1v2h1z",
  fillRule: "evenodd"
}));

export default SvgComponent;