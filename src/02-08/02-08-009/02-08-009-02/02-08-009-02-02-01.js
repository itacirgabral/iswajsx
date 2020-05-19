function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 31,
  height: 33
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M8 0L0 8h16L8 0zm0 1.438L13.594 7H2.406L8 1.437zM7 8v11.5a3.5 3.5 0 003.5 3.5 3.48 3.48 0 002.469-1.031L15 19.937V29a4 4 0 004 4h4a8 8 0 008-8H21v3c0 1.657-.895 3-2 3a2 2 0 01-2-2V15.094l-5.438 5.469A1.498 1.498 0 0110.5 21 1.5 1.5 0 019 19.5V8H7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8 1.438L2.406 7h11.188L8 1.437z",
  fill: "#fff"
}));

export default SvgComponent;