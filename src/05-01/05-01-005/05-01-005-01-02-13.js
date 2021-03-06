function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 54,
  height: 11
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M54 6H12V2h42v4zM9 7H8V0h1v7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6 8.5a2.5 2.5 0 115 0 2.5 2.5 0 11-5 0zM3 7H2V0h1v7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 8.5a2.5 2.5 0 115 0 2.5 2.5 0 11-5 0z"
}));

export default SvgComponent;