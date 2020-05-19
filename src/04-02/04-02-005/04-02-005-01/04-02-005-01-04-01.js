function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 21,
  height: 6
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M4.5 0C2.015 0 0 1.79 0 4v2h9V4c0-2.21-2.015-4-4.5-4zm0 2C6.433 2 8 2.895 8 4H1c0-1.105 1.567-2 3.5-2zM16.5 0C14.015 0 12 1.79 12 4v2h9V4c0-2.21-2.015-4-4.5-4zm0 2c1.933 0 3.5.895 3.5 2h-7c0-1.105 1.567-2 3.5-2z"
}));

export default SvgComponent;