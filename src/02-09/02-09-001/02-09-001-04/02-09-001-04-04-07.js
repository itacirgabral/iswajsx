function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 29,
  height: 21
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M3 0v2h18a6 6 0 016 6v3a6 6 0 01-6 6H0v4h20a9 9 0 009-9V8a8 8 0 00-8-8H3z"
}));

export default SvgComponent;