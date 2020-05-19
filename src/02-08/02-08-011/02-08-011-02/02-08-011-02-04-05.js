function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 22,
  height: 39
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M16 0a6 6 0 00-6 6v28a3 3 0 01-3 3 5 5 0 01-5-5v-3H0v3a7 7 0 007 7 5 5 0 005-5V6a4 4 0 118 0v10h2V6a6 6 0 00-6-6z"
}));

export default SvgComponent;