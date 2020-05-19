function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 19,
  height: 15
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M19 9l-5.5 5.5L8 9h11zm-2.438 1h-6.125l3.063 3.063L16.563 10zM10 0a5 5 0 015 5v4h-3V4a3 3 0 00-3-3H0V0h10z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16.563 10L13.5 13.063 10.437 10h6.126z",
  fill: "#fff"
}));

export default SvgComponent;