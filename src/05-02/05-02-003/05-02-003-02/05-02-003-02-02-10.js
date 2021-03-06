function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 8,
  height: 14
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M3.621.687l3.864 1.035-3.106 11.591-3.864-1.035L3.621.687z"
}));

export default SvgComponent;