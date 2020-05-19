function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 21,
  height: 19
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M5 0c7.18 0 13 5.82 13 13h-1C17 6.373 11.627 1 5 1H3V0h2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5.565 14.85L19 1.413 17.586 0 4.15 13.435l1.414 1.414z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5 1c6.627 0 12 5.373 12 12h-3a9 9 0 00-9-9H3V1h2z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5 4a9 9 0 019 9h-1a8 8 0 00-8-8H3V4h2zM10 13l5.5 5.5L21 13H10zM0 9.1L9.9 19H0V9.1z"
}));

export default SvgComponent;