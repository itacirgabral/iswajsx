function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 47,
  height: 18
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M46.875 7v4h-42V7h42zM2.125 0L0 2.125 4.875 7h4.25l-7-7zM15.875 18L18 15.875 13.125 11h-4.25l7 7z"
}));

export default SvgComponent;