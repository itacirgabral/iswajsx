function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 27,
  height: 24
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M6 17l7 7 7-7H6zm2.406 1h9.188L13 22.563 8.406 18zM16 0a4 4 0 00-4 4v6c0 2.539-3 7-3 7h8s-3-4.461-3-7V4a2 2 0 014 0v4h2V4a4 4 0 00-4-4z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 11v1h10v-1H0zm16 0v1h11v-1H16z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8.406 18L13 22.563 17.594 18H8.406z",
  fill: "#fff"
}));

export default SvgComponent;