function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 20,
  height: 28
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M7 0L2.5 4.5 7 9V0zM6 2.438v4.124L3.906 4.5 6 2.437zM20 14c0-5.523-4.477-10-10-10H7v1h3a9 9 0 019 9v6h1v-6z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6 2.438L3.906 4.5 6 6.563V2.438z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M18 23l-4.5 4.5L9 23h9zm-2.438 1h-4.124l2.062 2.094L15.563 24zM14 20c0-5.523-4.477-10-10-10H0v1h4a9 9 0 019 9v3h1v-3z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M15.563 24L13.5 26.094 11.437 24h4.126z",
  fill: "#fff"
}));

export default SvgComponent;