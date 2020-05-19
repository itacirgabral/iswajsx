function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 21,
  height: 4
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M4.5 4C2.015 4 0 2.21 0 0h1c0 1.105 1.567 2 3.5 2S8 1.105 8 0h1c0 2.21-2.015 4-4.5 4zM16.5 4C14.015 4 12 2.21 12 0h1c0 1.105 1.567 2 3.5 2S20 1.105 20 0h1c0 2.21-2.015 4-4.5 4z"
}));

export default SvgComponent;