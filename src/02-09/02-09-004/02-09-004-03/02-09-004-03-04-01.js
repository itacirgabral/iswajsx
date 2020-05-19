function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 44,
  height: 20
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M8 0a8 8 0 00-8 8v6h2V8a6 6 0 0112 0v3.5a8.5 8.5 0 0017 0v-4a5.5 5.5 0 0111 0V18h2V7.5a7.5 7.5 0 10-15 0v4c0 2.485-2.91 4.5-6.5 4.5S16 13.985 16 11.5V8a8 8 0 00-8-8z"
}));

export default SvgComponent;