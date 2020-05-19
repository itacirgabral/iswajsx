function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 21,
  height: 17
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M5.5.5L11 6H0L5.5.5zm0 1.438L2.437 5h6.126L5.5 1.937zM6 6v5a3 3 0 003 3h12v3H10a5 5 0 01-5-5V6h1z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5.5 1.938L8.563 5H2.436L5.5 1.937z",
  fill: "#fff"
}));

export default SvgComponent;