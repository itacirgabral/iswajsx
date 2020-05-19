function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 9,
  height: 42
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 12a10.97 10.97 0 003.219 7.781l1.156.844A8.988 8.988 0 017 27a8.988 8.988 0 01-2.625 6.375l-1.5 1.5A2.996 2.996 0 002 37v5h3v-5c0-1 .781-2.219.781-2.219A10.97 10.97 0 009 27a10.97 10.97 0 00-3.219-7.781l-1.156-.844A8.988 8.988 0 012 12c0-2.485.996-4.746 2.625-6.375l4.188-4.188L7.405 0 3.22 4.219A10.97 10.97 0 000 12z"
}));

export default SvgComponent;