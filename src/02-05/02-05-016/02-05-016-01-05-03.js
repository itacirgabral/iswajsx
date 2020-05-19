function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 32,
  height: 19
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M32 7v2H7V7h25zM22.5 9.5L28 15H17l5.5-5.5zm0 1.406L19.406 14h6.188L22.5 10.906zM7 15L0 8l7-7v14zm-1-2.438V3.438L1.437 8 6 12.563z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6 12.563L1.437 8 6 3.437v9.126zM22.5 10.938L25.563 14h-6.125l3.062-3.063z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16 0v15a2 2 0 004 0h5c0 2.21-2.239 4-5 4s-5-1.79-5-4V0h1z"
}));

export default SvgComponent;