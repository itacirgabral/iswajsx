function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 52,
  height: 9
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 4h42V0H0v4zM44 9V1.929h1.016v6.055h6.055V9H44z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M46.475 5.818l.707.707 4.243-4.243-.707-.707-4.243 4.243z"
}));

export default SvgComponent;