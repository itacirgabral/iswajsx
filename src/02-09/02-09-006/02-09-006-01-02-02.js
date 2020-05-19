function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 21,
  height: 37
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 15l5.5 5.5L11 15H0zm2.438 1h6.124L5.5 19.063 2.437 16zM9 6a5 5 0 00-5 5v4h3v-5a3 3 0 013-3h11V6H9z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M11 0h1v37h-1V0zM0 29l5.5 5.5L11 29H0zm2.438 1h6.124L5.5 33.063 2.437 30zM15 0h1v37h-1V0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9 20a5 5 0 00-5 5v4h3v-5a3 3 0 013-3h11v-1H9z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 0h3v37h-3V0zM2.438 30L5.5 33.063 8.563 30H2.436zM2.438 16L5.5 19.063 8.563 16H2.436z",
  fill: "#fff"
}));

export default SvgComponent;