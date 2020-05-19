function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 24,
  height: 25
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M9 12h15v13H9zM1.406.094L0 1.5 8.5 10h2.813L1.405.094z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5 7s-5 0-5 5h2s0-3 3-3h1s1.46-.008 2.344 1h2.25C10.066 8.604 8.848 7 6 7H5zM0 12c0 5 5 5 5 5h1c.788 0 1.44-.135 2-.344v-2.343C7.128 14.998 6 15 6 15H5c-3 0-3-3-3-3H0z"
}));

export default SvgComponent;