function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 16,
  height: 15
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M10 0a6 6 0 016 6v3a6 6 0 01-6 6H0v-4h11a3 3 0 003-3V6a4 4 0 00-4-4V0z"
}));

export default SvgComponent;