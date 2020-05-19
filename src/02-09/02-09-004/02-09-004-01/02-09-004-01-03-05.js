function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 49,
  height: 13
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M42 0l6.5 6.5L42 13v-2l4.5-4.5L42 2V0zM27 1a10.97 10.97 0 00-7.781 3.219l-.844 1.156C16.746 7.004 14.485 7 12 7s-4.746.004-6.375-1.625L1.437 1.187 0 2.595 4.219 6.78A10.97 10.97 0 0012 10a10.97 10.97 0 007.781-3.219l.844-1.156A8.988 8.988 0 0127 3c2.485 0 4.746.996 6.375 2.625l1 1A2.996 2.996 0 0036.5 7.5H42v-2h-5.5c-.276 0-.538-.1-.719-.281l-1-1A10.97 10.97 0 0027 1z"
}));

export default SvgComponent;