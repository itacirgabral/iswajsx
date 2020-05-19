function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 10,
  height: 15
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M3 11h1V0H3zM6 11h1V0H6z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M4 11h2V0H4z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5 15l-5-5 .719-.719L5 13.562l4.281-4.28L10 10l-5 5z"
}));

export default SvgComponent;