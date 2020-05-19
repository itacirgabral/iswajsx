function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 42,
  height: 9
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M12 9a10.97 10.97 0 01-7.781-3.219L0 1.594 1.438.187l4.187 4.188C7.254 6.004 9.515 6 12 6s4.746.004 6.375-1.625l.844-1.156A10.97 10.97 0 0127 0a10.97 10.97 0 017.781 3.219l1 1c.181.18.443.281.719.281H42v2h-5.5a2.996 2.996 0 01-2.125-.875l-1-1A8.988 8.988 0 0027 2a8.988 8.988 0 00-6.375 2.625l-.844 1.156A10.97 10.97 0 0112 9z"
}));

export default SvgComponent;