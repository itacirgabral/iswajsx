function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 17,
  height: 40
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M11.5 22.5L17 17H6l5.5 5.5zm0-1.438L8.437 18h6.126L11.5 21.063z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7.5 40c2.485 0 4.5-3.806 4.5-8.5v-8h-2v8c0 4.142-1.12 6.5-2.5 6.5S4 35.642 4 31.5v-23C4 4.358 6.12 2 7.5 2S10 4.358 10 8.5V16h2V8.5C12 3.806 9.985 0 7.5 0h-2C3.015 0 0 3.806 0 8.5v23C0 36.194 3.015 40 5.5 40h2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M11.5 21.063L14.563 18H8.436l3.063 3.063z",
  fill: "#fff"
}));

export default SvgComponent;