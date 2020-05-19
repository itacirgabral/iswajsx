function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 58,
  height: 58
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M31.656 32h-2.843L4.25 56.563 5.656 58l26-26z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M53.75 1.438l2.813 2.812L36.813 24h2.843l-8 8h-2.843L4.25 56.563 1.437 53.75 24.188 31h-2.843l10-10h2.843L53.75 1.437z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M56.563 4.25L58 5.656 39.656 24h-2.843l19.75-19.75zM24.188 31h-2.844L0 52.344l1.438 1.406L24.188 31zM52.344 0l1.406 1.438L34.187 21h-2.843l21-21zM27.5 25C24 25 24 29 24 29h2s0-2 1.5-2 1.5 2 4 2c3.5 0 3.5-4 3.5-4h-2s0 2-1.5 2-1.5-2-4-2z"
}));

export default SvgComponent;