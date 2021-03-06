function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 42,
  height: 9
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M30 0a10.97 10.97 0 017.781 3.219L42 7.406l-1.438 1.407-4.187-4.188A8.988 8.988 0 0030 2a8.988 8.988 0 00-6.375 2.625l-.844 1.156A10.97 10.97 0 0115 9a10.97 10.97 0 01-7.781-3.219l-1-1A1.015 1.015 0 005.5 4.5H0v-2h5.5c.828 0 1.582.332 2.125.875l1 1C10.254 6.004 12.515 6 15 6s4.746.004 6.375-1.625l.844-1.156A10.97 10.97 0 0130 0z"
}));

export default SvgComponent;