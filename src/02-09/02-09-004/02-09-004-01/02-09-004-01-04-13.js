function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 42,
  height: 9
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M30 9a10.97 10.97 0 007.781-3.219L42 1.594 40.562.187l-4.187 4.188C34.746 6.004 32.485 6 30 6s-4.746.004-6.375-1.625l-.844-1.156A10.97 10.97 0 0015 0a10.97 10.97 0 00-7.781 3.219l-1 1A1.015 1.015 0 015.5 4.5H0v2h5.5c.828 0 1.582-.332 2.125-.875l1-1A8.988 8.988 0 0115 2c2.485 0 4.746.996 6.375 2.625l.844 1.156A10.97 10.97 0 0030 9z"
}));

export default SvgComponent;