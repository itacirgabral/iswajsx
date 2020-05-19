function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 49,
  height: 13
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M7 0v13L.5 6.5 7 0zM37 3a10.97 10.97 0 00-7.781 3.219l-.844 1.156C26.746 9.004 24.485 9 22 9s-4.746.004-6.375-1.625l-1-1A2.996 2.996 0 0012.5 5.5H7v2h5.5c.276 0 .538.1.719.281l1 1A10.97 10.97 0 0022 12a10.97 10.97 0 007.781-3.219l.844-1.156A8.988 8.988 0 0137 5c2.485 0 4.746.996 6.375 2.625l4.188 4.188L49 10.405 44.781 6.22A10.97 10.97 0 0037 3z"
}));

export default SvgComponent;