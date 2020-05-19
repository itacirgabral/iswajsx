function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 15,
  height: 15
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 0h15v15H0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2 2v2H0v3h2v6h11V7h2V4h-2V2H2z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9.5 6a2.5 2.5 0 100 5 2.5 2.5 0 000-5z"
}));

export default SvgComponent;