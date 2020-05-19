function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 56,
  height: 12
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M42 10H0V6h42v4zM50.914 3.207l-.707.707 4.95 4.95.707-.707-4.95-4.95z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M51.268 4.268A2.5 2.5 0 1047.732.732a2.5 2.5 0 003.536 3.536zM48.086 8.793l.707-.707-4.95-4.95-.707.707 4.95 4.95z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M49.5 7a2.5 2.5 0 100 5 2.5 2.5 0 000-5z"
}));

export default SvgComponent;