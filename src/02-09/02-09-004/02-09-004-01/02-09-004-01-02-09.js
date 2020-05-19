function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 49,
  height: 13
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M42 0l6.5 6.5L42 13V0zm1 2.438v8.124L47.094 6.5 43 2.437zM12 3a10.97 10.97 0 017.781 3.219l.844 1.156C22.254 9.004 24.515 9 27 9s4.746.004 6.375-1.625l1-1A2.996 2.996 0 0136.5 5.5H42v2h-5.5c-.276 0-.538.1-.719.281l-1 1A10.97 10.97 0 0127 12a10.97 10.97 0 01-7.781-3.219l-.844-1.156A8.988 8.988 0 0012 5a8.988 8.988 0 00-6.375 2.625l-4.188 4.188L0 10.405 4.219 6.22A10.97 10.97 0 0112 3z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M43 2.438L47.094 6.5 43 10.563V2.437z",
  fill: "#fff"
}));

export default SvgComponent;