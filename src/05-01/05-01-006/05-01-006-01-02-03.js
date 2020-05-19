function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 42,
  height: 20
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M42 16H0v4h42v-4zM27 4h-1v11h1zM24 4h-1v11h1z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M26 4h-2v11h2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M25 0l5 5-.719.719L25 1.437 20.719 5.72 20 5l5-5zM18 11h-1V0h1zM15 11h-1V0h1z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M17 11h-2V0h2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16 15l5-5-.719-.719L16 13.562l-4.281-4.28L11 10l5 5z"
}));

export default SvgComponent;