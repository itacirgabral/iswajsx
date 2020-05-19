function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 27,
  height: 21
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M27 13l-8 8-8-8h16zm-2.438 1H13.438L19 19.563 24.563 14zM14 0a7 7 0 017 7v6h-4V6a4 4 0 00-4-4H0V0h14z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M24.563 14L19 19.563 13.437 14h11.126z",
  fill: "#fff"
}));

export default SvgComponent;