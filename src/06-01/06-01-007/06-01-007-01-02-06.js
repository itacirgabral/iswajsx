function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 31,
  height: 33
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M24 0v29L7.75 12.75l1.406-1.438L22 24.188V5H0V0h24z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M25 0v19h3v2.125c1.23.277 2.278 1.057 3 2.125v3.25c0-2.485-1.79-4.5-4-4.5v-2h-1v13h-1v-1.563L6.312 12.75l2.844-2.844L21 21.75V6H0V5h22v19.156L9.156 11.313 7.75 12.75 24 29V0h1zm6 26.5v3.25c-.722 1.068-1.77 1.848-3 2.125V33h-1v-2c2.21 0 4-2.015 4-4.5zm-4-3c1.38 0 2.5 1.343 2.5 3s-1.12 3-2.5 3v-6z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M27 20v2c2.21 0 4 2.015 4 4.5S29.21 31 27 31v2h-1V20h1zm0 3.5v6c1.38 0 2.5-1.343 2.5-3s-1.12-3-2.5-3z"
}));

export default SvgComponent;