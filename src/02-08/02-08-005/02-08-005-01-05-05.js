function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 10,
  height: 22
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 17l4.5 4.5L9 17H0zm2.438 1h4.124L4.5 20.094 2.437 18zM7 0a3 3 0 00-3 3v10c0 1.49-2 4-2 4h5s-2-2.51-2-4V3a2 2 0 114 0v4h1V3a3 3 0 00-3-3z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2.438 18L4.5 20.094 6.563 18H2.438z",
  fill: "#fff"
}));

export default SvgComponent;