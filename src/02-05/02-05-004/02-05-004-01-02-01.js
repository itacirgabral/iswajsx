function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 30,
  height: 26
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 16l7 7V9l-7 7zm1.438 0L6 11.437v9.126L1.437 16zM7 15v2h8v-2H7zm14 0v2h9v-2h-9z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M1.438 16L6 20.563v-9.125L1.437 16z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M18 0l-7 7h14l-7-7zm0 1.438L22.563 6h-9.125L18 1.437zM17 7h2v19h-2V7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M18 1.438L13.437 6h9.126L18 1.437z",
  fill: "#fff"
}));

export default SvgComponent;