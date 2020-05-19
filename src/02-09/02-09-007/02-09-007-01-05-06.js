function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 28,
  height: 20
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M28 7l-4.5-4.5L19 7h9zm-2.438-1h-4.125L23.5 3.906 25.563 6zM14 20c5.523 0 10-4.477 10-10V7h-1v3a9 9 0 01-9 9H8v1h6z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M25.563 6L23.5 3.906 21.437 6h4.125z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5 18L.5 13.5 5 9v9zm-1-2.438v-4.124L1.906 13.5 4 15.563zM8 14c5.523 0 10-4.477 10-10V0h-1v4a9 9 0 01-9 9H5v1h3z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4 15.563L1.906 13.5 4 11.437v4.126z",
  fill: "#fff"
}));

export default SvgComponent;