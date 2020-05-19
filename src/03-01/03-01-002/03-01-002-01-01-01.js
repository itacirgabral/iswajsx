function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 38,
  height: 11
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M19 0A21.94 21.94 0 003.437 6.438L0 9.938 1.063 11 4.5 7.5c3.71-3.71 8.84-6 14.5-6s10.79 2.29 14.5 6l3.438 3.5L38 9.937l-3.438-3.5A21.94 21.94 0 0019 0z"
}));

export default SvgComponent;