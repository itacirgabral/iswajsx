function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 58,
  height: 15
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 8h42v4H0V8zM52 0h-7.071v1.016h6.055v6.055H52V0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M47.757 1.414l.707.707-4.242 4.243-.707-.707 4.242-4.243zM49.879 3.536l.707.707-4.243 4.242-.707-.707 4.243-4.242zM48.984 15.016h7.07V14H50V7.945h-1.016v7.071z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M53.226 13.602l-.707-.707 4.243-4.242.707.707-4.243 4.242zM51.105 11.48l-.707-.706L54.64 6.53l.707.707-4.242 4.243z"
}));

export default SvgComponent;