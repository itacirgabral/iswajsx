function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 58,
  height: 58
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M26.344 32h2.843L53.75 56.563 52.344 58l-26-26z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4.25 1.438L1.437 4.25 21.188 24h-2.843l8 8h2.843L53.75 56.563l2.813-2.813L33.813 31h2.843l-10-10h-2.843L4.25 1.437z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M1.438 4.25L0 5.656 18.344 24h2.843L1.438 4.25zM33.813 31h2.843L58 52.344l-1.438 1.406L33.813 31zM5.656 0L4.25 1.438 23.813 21h2.843l-21-21zM25.5 25C22 25 22 29 22 29h2s0-2 1.5-2 1.5 2 4 2c3.5 0 3.5-4 3.5-4h-2s0 2-1.5 2-1.5-2-4-2z"
}));

export default SvgComponent;