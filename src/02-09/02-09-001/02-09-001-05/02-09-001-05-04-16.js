function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 38,
  height: 16
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M28 0c5.523 0 10 4.477 10 10v2h-2v-2a8 8 0 00-8-8H8a6 6 0 00-6 6c0 2.21 2.686 4 6 4h7v4H8A8 8 0 118 0h20z"
}));

export default SvgComponent;