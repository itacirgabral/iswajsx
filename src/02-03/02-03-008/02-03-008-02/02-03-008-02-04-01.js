function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 19,
  height: 19
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 0v19h19v-2H2V0H0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6 0v13h13v-2H8V0H6z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2 0v17h17v-4H6V0H2z",
  fill: "#fff"
}));

export default SvgComponent;