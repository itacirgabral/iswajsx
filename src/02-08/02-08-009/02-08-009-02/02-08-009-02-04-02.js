function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 20,
  height: 25
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M20 0v11.5a3.5 3.5 0 01-3.5 3.5 3.48 3.48 0 01-2.469-1.031L12 11.938V21a4 4 0 01-4 4 8 8 0 01-8-8h2a6 6 0 006 6 2 2 0 002-2V7.094l5.438 5.468A1.5 1.5 0 0018 11.5L17.999.001h2z"
}));

export default SvgComponent;