function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 21,
  height: 24
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M12 0h-1v24h1V0zM5.5 1.5L11 7H0l5.5-5.5zm0 1.438L2.437 6h6.126L5.5 2.937z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M15 0h-3v24h3V0z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16 0h-1v24h1V0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6 7v5a3 3 0 003 3h12v3H10a5 5 0 01-5-5V7h1z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5.5 2.938L8.563 6H2.436L5.5 2.937z",
  fill: "#fff"
}));

export default SvgComponent;