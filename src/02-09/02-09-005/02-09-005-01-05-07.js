function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 8,
  height: 23
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 7l7-7H0v7zm1-2.406V1h3.563L1 4.594z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8 11.5a9.956 9.956 0 00-2.938-7.063L3.875 3.125l-.75.75 1.25 1.25A8.988 8.988 0 017 11.5a8.988 8.988 0 01-2.625 6.375L0 22.281.719 23l4.343-4.438A9.956 9.956 0 008 11.5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M1 4.594L4.563 1H1v3.594z",
  fill: "#fff"
}));

export default SvgComponent;