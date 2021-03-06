function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 30,
  height: 68
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M28 0v38.594l-28 28L1.406 68 30 39.406V0h-2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M27 0v38.188L0 65.156v1.438l28-28V0h-1zm3 39.406L1.406 68h1.438L30 40.844v-1.438z",
  fill: "#fff"
}));

export default SvgComponent;