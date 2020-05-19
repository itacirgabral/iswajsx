function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 49,
  height: 13
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M7 13L.5 6.5 7 0v2L2.5 6.5 7 11v2zM37 3a10.97 10.97 0 017.781 3.219L49 10.406l-1.438 1.406-4.187-4.187A8.988 8.988 0 0037 5a8.988 8.988 0 00-6.375 2.625l-.844 1.156A10.97 10.97 0 0122 12a10.97 10.97 0 01-7.781-3.219l-1-1A1.015 1.015 0 0012.5 7.5H7v-2h5.5c.828 0 1.582.332 2.125.875l1 1C17.254 9.004 19.515 9 22 9s4.746.004 6.375-1.625l.844-1.156A10.97 10.97 0 0137 3z"
}));

export default SvgComponent;