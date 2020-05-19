function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 16,
  height: 32
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M16 19h-2l-3.5-3.5L7 19H5l5.5-5.5L16 19z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6 0c2.761 0 5 5.373 5 12v.5H9.875C9.54 6.478 8.395 2 7 2 5.343 2 4 8.268 4 16s1.343 14 3 14c1.356 0 2.472-4.237 2.844-10H11v1c0 6.075-2.015 11-4.5 11h-2C1.462 32 0 26.18 0 19v-7C0 5.373 2.134 0 6 0z"
}));

export default SvgComponent;