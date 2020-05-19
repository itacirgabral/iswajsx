function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 23,
  height: 24
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M16 11l7 7H9l7-7zm0 1.406L11.437 17h9.126L16 12.406z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2 0v11a1 1 0 001 1c.276 0 .538-.1.719-.281L7 8.438V19a3 3 0 003 3c1.657 0 3-1.79 3-4h6a6 6 0 01-6 6h-3a5 5 0 01-5-5v-5.781A2.98 2.98 0 013 14a3 3 0 01-3-3V0h2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16 12.406L20.563 17h-9.125L16 12.406z",
  fill: "#fff"
}));

export default SvgComponent;