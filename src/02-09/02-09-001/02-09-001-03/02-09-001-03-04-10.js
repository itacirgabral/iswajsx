function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 23,
  height: 15
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M15 0a8 8 0 018 8v7h-4V7a5 5 0 00-5-5H0V0h15z"
}));

export default SvgComponent;