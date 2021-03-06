function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 10,
  height: 14
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M3 0C2.034 0 1.119.208.281.563 1.341 2.66 2 4.99 2 7.5c0 2.14-.434 4.177-1.219 6.031C1.49 13.772 2.211 14 3 14A7 7 0 003 0zm.125 2A5.005 5.005 0 018 7c0 2.621-2.027 4.757-4.594 4.969C3.782 10.542 4 9.044 4 7.5A17.55 17.55 0 003.125 2z"
}));

export default SvgComponent;