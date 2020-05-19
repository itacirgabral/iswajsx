function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 12,
  height: 24
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 0v20a4 4 0 004 4 8 8 0 008-8h-2a6 6 0 01-6 6 2 2 0 01-2-2v-7.563c.591.342 1.267.563 2 .563a4 4 0 100-8c-.733 0-1.409.22-2 .563V0H0zm4 7a2 2 0 110 4 2 2 0 010-4z"
}));

export default SvgComponent;