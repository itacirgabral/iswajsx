function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 61,
  height: 22
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 5h42v4H0V5zM39 14v7.071h1.016v-6.055h6.055V14H39z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M41.475 17.182l.707-.707 4.243 4.243-.707.707-4.243-4.243zM46 7v7.071h1.016V8.016h6.055V7H46z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M48.475 10.182l.707-.707 4.243 4.243-.707.707-4.243-4.243zM53-.071V7h1.016V.945h6.055V-.07H53z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M55.475 3.11l.707-.706 4.243 4.242-.707.708-4.243-4.243z"
}));

export default SvgComponent;