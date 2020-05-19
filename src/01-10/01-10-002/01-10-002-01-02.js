function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 24,
  height: 10
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 0h15v10H0z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M2 2h11v3H2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16 4h8v2h-8z"
}));

export default SvgComponent;