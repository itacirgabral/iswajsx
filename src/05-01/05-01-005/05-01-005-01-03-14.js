function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 56,
  height: 12
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M14 10h42V6H14v4zM5.086 3.207l.707.707-4.95 4.95-.707-.707 4.95-4.95z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4.732 4.268A2.5 2.5 0 118.268.732a2.5 2.5 0 01-3.536 3.536zM7.914 8.793l-.707-.707 4.95-4.95.707.707-4.95 4.95z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6.5 7a2.5 2.5 0 110 5 2.5 2.5 0 010-5z"
}));

export default SvgComponent;