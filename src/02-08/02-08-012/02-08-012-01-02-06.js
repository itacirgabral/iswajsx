function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 33,
  height: 24
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M20 12l7 7H13l7-7zm0 1.406L15.437 18h9.126L20 13.406z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M11 0v19a3 3 0 006 0h6c0 2.761-2.686 5-6 5h-3a5 5 0 01-5-5V0h2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M33 13v1h-9v-1h9zm-17 0v1H0v-1h16z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M20 13.406L24.563 18h-9.125L20 13.406z",
  fill: "#fff"
}));

export default SvgComponent;