function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 39,
  height: 43
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M31 0l8 8h-2l-6-6-6 6h-2l8-8zM32 8v11.5a3.5 3.5 0 01-3.5 3.5 3.48 3.48 0 01-2.469-1.031L24 19.937V29.5a3.5 3.5 0 01-3.5 3.5 3.48 3.48 0 01-2.469-1.031L16 29.937V39a4 4 0 01-4 4H8a8 8 0 01-8-8h10v3c0 1.657.895 3 2 3a2 2 0 002-2V25.094l5.438 5.468A1.5 1.5 0 0022 29.5l-.001-14.405 5.438 5.469c.27.27.648.437 1.062.437a1.5 1.5 0 001.5-1.5V8h2z"
}));

export default SvgComponent;