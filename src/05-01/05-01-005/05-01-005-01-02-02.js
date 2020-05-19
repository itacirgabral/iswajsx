function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 55,
  height: 14
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 10h42v4H0v-4zM45.207 8.914l.707-.707 4.95 4.95-.707.707-4.95-4.95z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M47 7.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM49.207 3.914l.707-.707 4.95 4.95-.707.707-4.95-4.95z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M51 2.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
}));

export default SvgComponent;