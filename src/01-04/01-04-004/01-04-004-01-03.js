function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 14,
  height: 22
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M7 0L0 7v15h14V7L7 0z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M0 12h8v3H0z"
}));

export default SvgComponent;