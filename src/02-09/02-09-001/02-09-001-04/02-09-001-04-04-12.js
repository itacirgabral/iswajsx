function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 26,
  height: 21
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M18 0a8 8 0 018 8v4a9 9 0 01-9 9H0v-4h18a6 6 0 006-6V8a6 6 0 00-6-6V0z"
}));

export default SvgComponent;