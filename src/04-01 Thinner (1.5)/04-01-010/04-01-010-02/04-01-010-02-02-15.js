function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 47,
  height: 18
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M46.875 11V7h-42v4h42zM2.125 18L0 15.875 4.875 11h4.25l-7 7zM15.875 0L18 2.125 13.125 7h-4.25l7-7z"
}));

export default SvgComponent;