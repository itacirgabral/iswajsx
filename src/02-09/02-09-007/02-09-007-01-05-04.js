function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 20,
  height: 28
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M13 28l4.5-4.5L13 19v9zm1-2.438v-4.125l2.094 2.063L14 25.563zM0 14c0 5.523 4.477 10 10 10h3v-1h-3a9 9 0 01-9-9V8H0v6z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14 25.563l2.094-2.063L14 21.437v4.125z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2 5L6.5.5 11 5H2zm2.438-1h4.125L6.5 1.906 4.437 4zM6 8c0 5.523 4.477 10 10 10h4v-1h-4a9 9 0 01-9-9V5H6v3z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4.438 4L6.5 1.906 8.563 4H4.436z",
  fill: "#fff"
}));

export default SvgComponent;