function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 14,
  height: 22
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M7 0L0 7v15h14V7L7 0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7 2.813l-5 5.03V20h6V3.812l-1-1z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2 12h5v3H2z"
}));

export default SvgComponent;