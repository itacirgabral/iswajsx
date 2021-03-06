function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 32,
  height: 19
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M7 10v2h9v-2H7zm12 0v2h13v-2H19zM23 6H12L17.5.5 23 6zm-2.408-.994L17.5 1.914l-3.07 3.07 6.162.022zM7 18l-7-7 7-7v14zm-1-2.438V6.438L1.437 11 6 15.563z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6 15.563L1.437 11 6 6.437v9.125zM20.592 5.006l-6.162-.022 3.07-3.07 3.092 3.092z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M18 5v10c0 1.105.672 2 1.5 2s1.5-.895 1.5-2v-1h5v1c0 2.21-2.015 4-4.5 4S17 17.21 17 15V5h1z"
}));

export default SvgComponent;