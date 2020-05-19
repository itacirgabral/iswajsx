function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 11,
  height: 19
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M5.75 0L3.625 2.125A17.004 17.004 0 017.156 8.25 5.454 5.454 0 005.5 8a5.5 5.5 0 105.469 4.938A19.9 19.9 0 005.75 0z"
}));

export default SvgComponent;