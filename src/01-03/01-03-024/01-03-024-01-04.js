function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 24,
  height: 25
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M9 12h15v13H9z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M11 14h11v9H11z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M1 0v2h8s4 0 4 4v4h2V6s0-6-6-6H1z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M1 3v2h6s2 0 2 2v3h2V7s0-4-4-4H1zM0 17h8v2H0z"
}));

export default SvgComponent;