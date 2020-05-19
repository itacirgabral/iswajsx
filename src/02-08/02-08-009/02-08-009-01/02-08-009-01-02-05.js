function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 23,
  height: 24
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M7 11l-7 7h14l-7-7zm0 1.406L11.563 17H2.437L7 12.406z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M21 0v11a1 1 0 01-1 1c-.276 0-.538-.1-.719-.281L16 8.438V19a3 3 0 01-3 3c-1.657 0-3-1.79-3-4H4a6 6 0 006 6h3a5 5 0 005-5v-5.781A2.98 2.98 0 0020 14a3 3 0 003-3V0h-2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7 12.406L2.437 17h9.126L7 12.406z",
  fill: "#fff"
}));

export default SvgComponent;