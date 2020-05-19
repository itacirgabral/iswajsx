function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 54,
  height: 19
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M9 0l37 5v9l8 1v4l-11-3v-6L12 3v6L0 6V4l9 1V0z"
}));

export default SvgComponent;