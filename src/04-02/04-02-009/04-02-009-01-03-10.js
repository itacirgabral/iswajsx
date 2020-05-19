function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 11,
  height: 11
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M6.518 10.342l3.536-3.536-.707-.707-2.829 2.828L3.69 6.1l-.707.707 3.535 3.536zM4.84 3.182A4.006 4.006 0 016.032 6.01H5.016a3.009 3.009 0 00-3.005-3.005H.022v-.994l1.989-.022c1.104 0 2.104.47 2.828 1.193z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6.253 1.768A5.99 5.99 0 018.021 6.01H7.005A4.99 4.99 0 002.01 1.016H.022V0h1.989a5.99 5.99 0 014.242 1.768z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2.022 1a5 5 0 015 5h-1a4 4 0 00-4-4h-2V1h2z",
  fill: "#fff"
}));

export default SvgComponent;