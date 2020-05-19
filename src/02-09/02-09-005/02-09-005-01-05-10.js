function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 20,
  height: 18
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M20 13l-4.5 4.5L11 13h9zm-2.438 1h-4.125l2.063 2.094L17.563 14zM6 0c5.523 0 10 4.477 10 10v3h-1v-3a9 9 0 00-9-9H0V0h6z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M17.563 14L15.5 16.094 13.437 14h4.126z",
  fill: "#fff"
}));

export default SvgComponent;