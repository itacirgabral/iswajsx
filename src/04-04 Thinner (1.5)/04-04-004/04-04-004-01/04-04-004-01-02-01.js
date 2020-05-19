function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 9,
  height: 8
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M4.5 0C2.015 0 0 1.79 0 4s2.015 4 4.5 4S9 6.21 9 4 6.985 0 4.5 0zm0 1.5c1.657 0 3 1.12 3 2.5s-1.343 2.5-3 2.5-3-1.12-3-2.5 1.343-2.5 3-2.5z"
}));

export default SvgComponent;