function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 9,
  height: 8
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M4.5 0C2.015 0 0 1.79 0 4s2.015 4 4.5 4S9 6.21 9 4 6.985 0 4.5 0zm0 2C5.88 2 7 2.895 7 4S5.88 6 4.5 6 2 5.105 2 4s1.12-2 2.5-2z"
}));

export default SvgComponent;