function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 11,
  height: 11
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M6.496.658l3.536 3.536-.707.707-2.829-2.828L3.668 4.9l-.707-.707L6.496.658zM4.817 7.818A4.006 4.006 0 006.01 4.99H4.994a3.009 3.009 0 01-3.005 3.005H0l-.022.994 2.01.022c1.105 0 2.105-.47 2.83-1.193z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6.231 9.232A5.99 5.99 0 008 4.99H6.983a4.99 4.99 0 01-4.994 4.994H0V11h1.989A5.99 5.99 0 006.23 9.232z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2 10a5 5 0 005-5H6a4 4 0 01-4 4H0v1h2z",
  fill: "#fff"
}));

export default SvgComponent;