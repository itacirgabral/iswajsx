function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 47,
  height: 11
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 7v4h42V7H0zM44.75 0l2.125 2.125L42 7h-4.25l7-7z"
}));

export default SvgComponent;