function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 49,
  height: 13
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M7 13V0L.5 6.5 7 13zM22 1a10.97 10.97 0 017.781 3.219l.844 1.156C32.254 7.004 34.515 7 37 7s4.746.004 6.375-1.625l4.188-4.188L49 2.595 44.781 6.78A10.97 10.97 0 0137 10a10.97 10.97 0 01-7.781-3.219l-.844-1.156A8.988 8.988 0 0022 3a8.988 8.988 0 00-6.375 2.625l-1 1A2.996 2.996 0 0112.5 7.5H7v-2h5.5c.276 0 .538-.1.719-.281l1-1A10.97 10.97 0 0122 1z"
}));

export default SvgComponent;