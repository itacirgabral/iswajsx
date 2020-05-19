function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 36,
  height: 39
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 11l8 8 8-8H0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M13 0a6 6 0 00-6 6v5h2V6a4 4 0 118 0v28a5 5 0 005 5h2c6.627 0 12-5.373 12-12H24c0 4.97-.895 9-2 9-1.657 0-3-.895-3-2V6a6 6 0 00-6-6z"
}));

export default SvgComponent;