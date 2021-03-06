function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 23,
  height: 19
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M4 2c0 7.18 5.82 13 13 13v-1C10.373 14 5 8.627 5 2V0H4v2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5 2c0 6.627 5.373 12 12 12v-3a9 9 0 01-9-9V0H5v2z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5.565 14.849L19 1.414 17.586 0 4.15 13.435l1.414 1.414z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8 2a9 9 0 009 9v-1a8 8 0 01-8-8V0H8v2zM17 7l5.5 5.5L17 18V7zM0 9.1L9.9 19H0V9.1z"
}));

export default SvgComponent;