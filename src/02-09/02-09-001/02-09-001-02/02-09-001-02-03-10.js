function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 27,
  height: 21
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M11 13l8 8 8-8h-2l-6 6-6-6h-2zM14 0a7 7 0 017 7v6h-4V6a4 4 0 00-4-4H0V0h14z"
}));

export default SvgComponent;