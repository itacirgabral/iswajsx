function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 11,
  height: 9
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M5.5 0C3.015 0 1 1.79 1 4H0v1h1c0 2.21 2.015 4 4.5 4S10 7.21 10 5h1V4h-1c0-2.21-2.015-4-4.5-4zm0 2C7.433 2 9 2.895 9 4H2c0-1.105 1.567-2 3.5-2zM2 5h7c0 1.105-1.567 2-3.5 2S2 6.105 2 5z"
}));

export default SvgComponent;