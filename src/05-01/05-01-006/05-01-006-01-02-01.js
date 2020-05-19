function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 42,
  height: 20
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 16h42v4H0v-4zM15 4h1v11h-1zM18 4h1v11h-1z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M16 4h2v11h-2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M17 0l-5 5 .719.719L17 1.437l4.281 4.282L22 5l-5-5zM24 11h1V0h-1zM27 11h1V0h-1z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M25 11h2V0h-2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M26 15l-5-5 .719-.719L26 13.562l4.281-4.28L31 10l-5 5z"
}));

export default SvgComponent;