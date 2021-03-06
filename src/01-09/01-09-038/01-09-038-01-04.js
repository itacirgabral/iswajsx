function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 29,
  height: 19
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M16 4h13v15H16z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M18 6h9v11h-9z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 4v1.989L14 6V4H0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3.375.156L1.281 2.25 14 15v-4.25L3.375.156z"
}));

export default SvgComponent;