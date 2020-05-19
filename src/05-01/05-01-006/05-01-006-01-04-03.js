function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 19,
  height: 15
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M16 4h-1v11h1zM13 4h-1v11h1z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M15 4h-2v11h2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14 0l5 5-.719.719L14 1.437 9.719 5.72 9 5l5-5zM7 11H6V0h1zM4 11H3V0h1z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M6 11H4V0h2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5 15l5-5-.719-.719L5 13.562.719 9.282 0 10l5 5z"
}));

export default SvgComponent;