function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 35,
  height: 39
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M8 23l-8 8h16l-8-8zm0 1.406L13.563 30H2.437L8 24.406z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M33 0v14.5a1.5 1.5 0 01-1.5 1.5c-.414 0-.791-.166-1.063-.438L25 10.095V25.5a1.5 1.5 0 01-1.5 1.5c-.414 0-.791-.166-1.063-.438L17 21.095V35a2 2 0 01-2 2c-1.657 0-3-2.686-3-6H4a8 8 0 008 8h3a4 4 0 004-4v-9.063l2.031 2.032A3.48 3.48 0 0023.5 29a3.5 3.5 0 003.5-3.5V14.937l2.031 2.032A3.48 3.48 0 0031.5 18a3.5 3.5 0 003.5-3.5V0h-2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8 24.406L2.437 30h11.126L8 24.406z",
  fill: "#fff"
}));

export default SvgComponent;