function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 15,
  height: 28
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 15h15v13H0z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M2 17h6v9H2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3.406 1.406L15 13h-2.812L1.969 2.812l1.437-1.406z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7 4v9h2V4s0-2 2-2 2 2 2 2v5h2V4s0-4-4-4-4 4-4 4z"
}));

export default SvgComponent;