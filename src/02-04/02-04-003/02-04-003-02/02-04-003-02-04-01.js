function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 12,
  height: 22
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M2 0h2v22H2V0zM8 0h2v22H8V0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4 0v22h4V0H4z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3 16l-3 6h12l-3-6H3z"
}));

export default SvgComponent;