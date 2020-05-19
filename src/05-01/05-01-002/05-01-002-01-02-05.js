function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 51,
  height: 11
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M51 0L12 6V1L0 3v4l9-2v6l42-9V0z"
}));

export default SvgComponent;