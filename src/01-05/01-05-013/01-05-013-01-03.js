function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 19,
  height: 27
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M8 9h11v18H8zM14 .344l-.875.5L17.844 9H19L14 .344z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7 0l-.688.719L14.595 9H16L7 0zM3.469 3.5l-.5.875 8 4.625H13L3.469 3.5zM1.5 7.219l-.25.968L8 10V9h.125L1.5 7.219zM0 18v2h8v-2H0z"
}));

export default SvgComponent;