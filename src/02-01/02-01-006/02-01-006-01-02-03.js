function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 16,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M7 3v4H3v2h4v4h2V9h4V7H9V3H7zM0 0h16v2H0zM0 14h16v2H0zM0 28h16v2H0zM7 17v4H3v2h4v4h2v-4h4v-2H9v-4H7z"
}));

export default SvgComponent;