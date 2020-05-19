function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 74,
  height: 8
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 0h74v2H0V0zM0 6h74v2H0V6z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 2h74v4H0V2z",
  fill: "#fff"
}));

export default SvgComponent;