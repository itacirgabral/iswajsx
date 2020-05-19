function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 39,
  height: 20
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M1 9v2h21V9H1zm24 0v2h7V9h-7zM32 17l7-7-7-7v2.844L36.156 10 32 14.156V17zM28 5L23.5.5 19 5h1.406L23.5 1.906 26.594 5H28z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M23 5v10c0 1.105-.672 2-1.5 2s-1.5-.895-1.5-2v-1h-5v1c0 2.21 2.015 4 4.5 4s4.5-1.79 4.5-4V5h-1zM9 16l-4.5-4.5L0 16h1.406L4.5 12.906 7.594 16H9z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M11 1v15a2 2 0 01-4 0H2c0 2.21 2.239 4 5 4s5-1.79 5-4V1h-1z"
}));

export default SvgComponent;