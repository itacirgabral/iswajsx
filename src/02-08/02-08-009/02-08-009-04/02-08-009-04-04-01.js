function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 28,
  height: 35
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 0v11.5A3.5 3.5 0 003.5 15a3.48 3.48 0 002.469-1.031L8 11.938V21.5a3.5 3.5 0 003.5 3.5 3.48 3.48 0 002.469-1.031L16 21.937V31a4 4 0 004 4 8 8 0 008-8h-2a6 6 0 01-6 6 2 2 0 01-2-2V17.094l-5.438 5.468A1.498 1.498 0 0111.5 23a1.5 1.5 0 01-1.5-1.5V7.094l-5.438 5.468A1.498 1.498 0 013.5 13 1.5 1.5 0 012 11.5V0H0z"
}));

export default SvgComponent;