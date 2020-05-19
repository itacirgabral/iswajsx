function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 16,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 22a8 8 0 1016 0 8 8 0 10-16 0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8 16c-3.312 0-6 2.688-6 6s2.688 6 6 6V16z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4.406 2.406L2.97 3.812l10.031 10V19h2v-6L4.406 2.406z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7 0h2v15H7z"
}));

export default SvgComponent;