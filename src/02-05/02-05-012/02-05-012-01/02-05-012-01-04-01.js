function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 17,
  height: 18
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M15 0v11.188L7 3.155v10.031L1.406 7.595 0 9l9 9V8l8 8V0h-2z"
}));

export default SvgComponent;