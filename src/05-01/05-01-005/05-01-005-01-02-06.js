function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 58,
  height: 10
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M42 10H0V6h42v4zM54.793 5.086l-.707.707-4.95-4.95.707-.707 4.95 4.95z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M53 6.5a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0zM47.793 5.086l-.707.707-4.95-4.95.707-.707 4.95 4.95z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M46 6.5a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0z"
}));

export default SvgComponent;