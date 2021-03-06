function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 19,
  height: 26
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M10 0a4 4 0 014 4v1h-1V4a3 3 0 00-3-3H9C7.343 1 6 2.79 6 5v5.406A2.98 2.98 0 017.5 10a3 3 0 010 6 2.98 2.98 0 01-1.5-.406V17c0 3.283 4 9 4 9H0s4-5.717 4-9V5a5 5 0 015-5h1zM7.5 11.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19 5l-5.5 5.5L8 5h11zm-2.438 1h-6.125L13.5 9.063 16.563 6z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16.563 6L13.5 9.063 10.437 6h6.126z",
  fill: "#fff"
}));

export default SvgComponent;