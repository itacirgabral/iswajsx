function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 42,
  height: 38
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M42 0L0 6v5l42-9V0zM42 27L0 33v5l42-9v-2z"
}));

export default SvgComponent;