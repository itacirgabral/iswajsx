function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 50,
  height: 20
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M50 0v2l-39 9v6L0 20v-4l8-1V6l42-6z"
}));

export default SvgComponent;