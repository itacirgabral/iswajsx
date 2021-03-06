function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 36,
  height: 10
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M30 0a6 6 0 016 6v3h-2V6a4 4 0 00-4-4 4.01 4.01 0 00-2.844 1.156L22.25 8.25A5.992 5.992 0 0118 10a5.992 5.992 0 01-4.25-1.75L8.844 3.156A4.01 4.01 0 006 2a4 4 0 00-4 4v4H0V6a6 6 0 016-6c1.657 0 3.164.664 4.25 1.75l2.438 2.563C13.973 5.647 16.145 6 18 6c1.855 0 4.026-.352 5.313-1.688L25.75 1.75A5.992 5.992 0 0130 0z"
}));

export default SvgComponent;