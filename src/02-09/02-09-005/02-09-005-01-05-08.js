function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 18,
  height: 20
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M5 0L.5 4.5 5 9V0zM4 2.438v4.124L1.906 4.5 4 2.437zM18 14C18 8.477 13.523 4 8 4H5v1h3a9 9 0 019 9v6h1v-6z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4 2.438L1.906 4.5 4 6.563V2.438z",
  fill: "#fff"
}));

export default SvgComponent;