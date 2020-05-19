function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 13,
  height: 49
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 42h13l-6.5 6.5L0 42zM3 12a10.97 10.97 0 003.219 7.781l1.156.844A8.988 8.988 0 0110 27a8.988 8.988 0 01-2.625 6.375l-1.5 1.5A2.996 2.996 0 005 37v5h3v-5c0-1 .781-2.219.781-2.219A10.97 10.97 0 0012 27a10.97 10.97 0 00-3.219-7.781l-1.156-.844A8.988 8.988 0 015 12c0-2.485.996-4.746 2.625-6.375l4.188-4.188L10.405 0 6.22 4.219A10.97 10.97 0 003 12z"
}));

export default SvgComponent;