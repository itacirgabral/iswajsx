function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 42,
  height: 20
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 16h42v4H0v-4zM19 11h1V0h-1zM22 11h1V0h-1z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M20 11h2V0h-2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M21 15l-5-5 .719-.719L21 13.562l4.281-4.28L26 10l-5 5z"
}));

export default SvgComponent;