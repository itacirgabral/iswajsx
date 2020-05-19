function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 47,
  height: 18
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 11V7h42v4H0zM44.75 18l2.125-2.125L42 11h-4.25l7 7zM31 0l-2.125 2.125L33.75 7H38l-7-7z"
}));

export default SvgComponent;