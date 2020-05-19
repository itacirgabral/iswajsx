function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 15,
  height: 32
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M5.5 19.5L11 14H0l5.5 5.5zm0-1.438L2.437 15h6.126L5.5 18.063z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10 32c2.761 0 5-5.373 5-12v-9c0-6.075-2.015-11-4.5-11h-2C5.462 0 3 5.82 3 13h5.063C8.309 6.718 9.303 2 10.5 2 11.88 2 13 8.268 13 16s-1.12 14-2.5 14c-1.097 0-2.007-3.995-2.344-9.5H3C3.155 26.892 6.233 32 10 32z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5.5 18.063L8.563 15H2.436L5.5 18.063z",
  fill: "#fff"
}));

export default SvgComponent;