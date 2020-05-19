function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 36,
  height: 9
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M26.5 0c2.664 0 5.056 1.046 6.781 2.719L35.75 5.25l-1.406 1.406-2.469-2.531C30.513 2.822 28.605 2 26.5 2 22.358 2 19 5.134 19 9h-2c0-3.866-3.358-7-7.5-7C5.358 2 2 5.134 2 9H0c0-4.97 4.253-9 9.5-9 3.737 0 6.949 2.059 8.5 5.031C19.551 2.06 22.763 0 26.5 0z"
}));

export default SvgComponent;