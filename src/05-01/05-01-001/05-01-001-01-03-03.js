function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 42,
  height: 38
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M41.802 11.503L1.233.633.198 4.497l40.569 10.87 1.035-3.864zM42 34H0v4h42v-4z"
}));

export default SvgComponent;