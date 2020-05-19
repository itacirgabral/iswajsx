function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 6,
  height: 10
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M3.07.878L5 1.396l-2.07 7.727-1.932-.518L3.069.878z"
}));

export default SvgComponent;