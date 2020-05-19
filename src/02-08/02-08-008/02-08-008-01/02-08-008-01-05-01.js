function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 20,
  height: 16
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M5.5.5L0 6h11L5.5.5zm0 1.438L8.563 5H2.436L5.5 1.937zM5 6v6a4 4 0 004 4h4a7 7 0 007-7h-9v2c0 1.657-.895 3-2 3a3 3 0 01-3-3V6H5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5.5 1.938L2.437 5h6.126L5.5 1.937z",
  fill: "#fff"
}));

export default SvgComponent;