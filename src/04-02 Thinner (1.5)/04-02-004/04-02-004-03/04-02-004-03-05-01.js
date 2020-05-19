function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 9,
  height: 4
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 0c0 2.21 2.015 4 4.5 4S9 2.21 9 0H8c0 1.38-1.567 2.5-3.5 2.5S1 1.38 1 0H0z"
}));

export default SvgComponent;