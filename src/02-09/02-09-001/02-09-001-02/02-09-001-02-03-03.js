function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 23,
  height: 20
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M16 6l7 7-7 7v-2l5-5-5-5V6z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6 0a6 6 0 00-6 6v3a6 6 0 006 6h10v-4H5a3 3 0 01-3-3V6a4 4 0 014-4h14V0H6z"
}));

export default SvgComponent;