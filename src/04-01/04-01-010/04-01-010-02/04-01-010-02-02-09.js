function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 42,
  height: 11
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M42 7v4H0V7h42zM23.438 0l2.125 2.125L20.688 7h-4.25l7-7z"
}));

export default SvgComponent;