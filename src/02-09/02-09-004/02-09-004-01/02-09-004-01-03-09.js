function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 49,
  height: 13
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M42 13l6.5-6.5L42 0v2l4.5 4.5L42 11v2zM12 3a10.97 10.97 0 00-7.781 3.219L0 10.406l1.438 1.406 4.187-4.187A8.988 8.988 0 0112 5c2.485 0 4.746.996 6.375 2.625l.844 1.156A10.97 10.97 0 0027 12a10.97 10.97 0 007.781-3.219l1-1c.181-.18.443-.281.719-.281H42v-2h-5.5c-.828 0-1.582.332-2.125.875l-1 1C31.746 9.004 29.485 9 27 9s-4.746.004-6.375-1.625l-.844-1.156A10.97 10.97 0 0012 3z"
}));

export default SvgComponent;