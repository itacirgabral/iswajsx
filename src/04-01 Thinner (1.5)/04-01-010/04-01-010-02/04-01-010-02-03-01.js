function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 18,
  height: 6
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 4v2h18V4H0zM7.703 0L6.297 1.406 8.89 4h2.812l-4-4z"
}));

export default SvgComponent;