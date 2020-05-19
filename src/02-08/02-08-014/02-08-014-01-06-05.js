function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 26,
  height: 22
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M4.5 13.5L9 18H8l-3.5-3.5L1 18H0l4.5-4.5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M11 0v17c0 1.657-.895 3-2 3a2 2 0 01-2-2H2a4 4 0 004 4h1a5 5 0 005-5V0h-1zM21.5.5L26 5h-1l-3.5-3.5L18 5h-1L21.5.5zM22 5v13a4 4 0 01-4 4 5 5 0 01-5-5h5c0 1.657.672 3 1.5 3s1.5-1.343 1.5-3V5h1z"
}));

export default SvgComponent;