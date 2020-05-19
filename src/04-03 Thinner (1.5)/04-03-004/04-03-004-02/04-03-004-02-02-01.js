function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 11,
  height: 12
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M4.75 0v5.688L1.531 3.843l-.75 1.312L4 7 .781 8.844l.75 1.312L4.75 8.312V12h1.5V8.312l3.219 1.844.75-1.312L7 7l3.219-1.844-.75-1.312L6.25 5.688V0h-1.5z"
}));

export default SvgComponent;