function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 32,
  height: 20
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M7 9v2h9V9H7zm12 0v2h13V9H19zM23 14H12l5.5 5.5L23 14zm-2.408.994L17.5 18.086l-3.07-3.07 6.162-.022zM7 17l-7-7 7-7v14zm-1-2.438V5.438L1.437 10 6 14.563z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6 14.563L1.437 10 6 5.437v9.125zM20.592 14.994l-6.162.022 3.07 3.07 3.092-3.092z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M20 0a3 3 0 00-3 3v8a4 4 0 01-4 4h9a4 4 0 01-4-4V3a2 2 0 014 0v4h1V3a3 3 0 00-3-3z"
}));

export default SvgComponent;