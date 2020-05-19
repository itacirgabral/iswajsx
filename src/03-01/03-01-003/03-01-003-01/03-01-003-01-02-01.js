function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 11,
  height: 4
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M7.5 0C11 0 11 4 11 4H9s0-2-1.5-2-1.5 2-4 2C0 4 0 0 0 0h2s0 2 1.5 2 1.5-2 4-2z"
}));

export default SvgComponent;