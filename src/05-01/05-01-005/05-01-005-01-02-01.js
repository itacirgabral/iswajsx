function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 54,
  height: 11
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 5h42v4H0V5zM45 4h1v7h-1V4z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M48 2.5a2.5 2.5 0 11-5 0 2.5 2.5 0 115 0zM51 4h1v7h-1V4z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M54 2.5a2.5 2.5 0 11-5 0 2.5 2.5 0 115 0z"
}));

export default SvgComponent;