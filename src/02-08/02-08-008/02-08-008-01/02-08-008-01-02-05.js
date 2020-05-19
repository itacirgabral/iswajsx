function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 18,
  height: 26
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M7 13l-7 7h14l-7-7zm0 1.406L11.563 19H2.437L7 14.406z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16 0v21a3 3 0 01-3 3c-1.657 0-3-1.79-3-4H4a6 6 0 006 6h3a5 5 0 005-5V0h-2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7 14.406L2.437 19h9.126L7 14.406z",
  fill: "#fff"
}));

export default SvgComponent;