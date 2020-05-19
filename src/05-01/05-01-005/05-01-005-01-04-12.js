function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 56,
  height: 19
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M14 19h42v-4H14v4zM15.793 5.086l-.707.707-4.95-4.95.707-.707 4.95 4.95z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14 6.5a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0zM10.793 10.086l-.707.707-4.95-4.95.707-.707 4.95 4.95z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9 11.5a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0zM5.793 15.086l-.707.707-4.95-4.95.707-.707 4.95 4.95z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4 16.5a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0z"
}));

export default SvgComponent;