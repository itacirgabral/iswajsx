function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 28,
  height: 20
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 7l4.5-4.5L9 7H0zm2.438-1h4.124L4.5 3.906 2.437 6zM14 20C8.477 20 4 15.523 4 10V7h1v3a9 9 0 009 9h6v1h-6z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2.438 6L4.5 3.906 6.563 6H2.438z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M23 18l4.5-4.5L23 9v9zm1-2.438v-4.124l2.094 2.062L24 15.563zM20 14c-5.523 0-10-4.477-10-10V0h1v4a9 9 0 009 9h3v1h-3z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M24 15.563l2.094-2.063L24 11.437v4.126z",
  fill: "#fff"
}));

export default SvgComponent;