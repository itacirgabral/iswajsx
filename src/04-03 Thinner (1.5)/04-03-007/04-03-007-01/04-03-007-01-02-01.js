function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 11,
  height: 19
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M5.5 0a5.5 5.5 0 015.469 6.063A19.9 19.9 0 015.75 19l-2.125-2.125a17.004 17.004 0 003.531-6.125A5.454 5.454 0 015.5 11a5.5 5.5 0 010-11z"
}));

export default SvgComponent;