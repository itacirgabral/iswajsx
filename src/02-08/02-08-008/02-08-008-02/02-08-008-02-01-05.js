function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 21,
  height: 29
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 21l8-8 8 8H0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19 0v23a4 4 0 01-4 4c-1.657 0-3-2.686-3-6H4a8 8 0 008 8h3a6 6 0 006-6V0h-2z"
}));

export default SvgComponent;