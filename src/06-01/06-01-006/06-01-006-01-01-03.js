function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 34,
  height: 48
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M20.5 0A8.5 8.5 0 0012 8.5a8.501 8.501 0 005 7.75V19h-3a7 7 0 00-7 7v22h2V26a5 5 0 015-5h13a5 5 0 015 5v22h2V26a7 7 0 00-7-7h-3v-2.75a8.501 8.501 0 005-7.75A8.5 8.5 0 0020.5 0zM13 26v15h3V26h-3zm12 0v15h3V26h-3zM11 44v4h19v-4H11zM5 16v13H4v-2c-2.21 0-4-2.015-4-4.5S1.79 18 4 18v-2h1zm-1 3.5c-1.38 0-2.5 1.343-2.5 3s1.12 3 2.5 3v-6z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4 19.5v6c-1.38 0-2.5-1.343-2.5-3s1.12-3 2.5-3z",
  fill: "#fff"
}));

export default SvgComponent;