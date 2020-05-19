function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 58,
  height: 58
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M32 34.813v2.843L52.344 58l1.406-1.438L32 34.813z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4.25 1.438L1.437 4.25 21.188 24h-2.843L32 37.656v-2.843l21.75 21.75 2.813-2.813L36 33.187v-2.843L26.656 21h-2.843L4.25 1.437z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M1.438 4.25L0 5.656 18.344 24h2.843L1.438 4.25zM36 30.344v2.843L56.563 53.75 58 52.344l-22-22zM5.656 0L4.25 1.438 23.813 21h2.843l-21-21zM32.406 22L23 27.438V29h12v-2h-7.313L35 22.781V22h-2.594z"
}));

export default SvgComponent;