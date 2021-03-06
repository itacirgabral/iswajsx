function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 34,
  height: 48
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M13.5 0A8.5 8.5 0 005 8.5a8.501 8.501 0 005 7.75V19H7a7 7 0 00-7 7v22h2V26a5 5 0 015-5h13a5 5 0 015 5v22h2V26a7 7 0 00-7-7h-3v-2.75a8.501 8.501 0 005-7.75A8.5 8.5 0 0013.5 0zM6 26v15h3V26H6zm12 0v15h3V26h-3zM4 44v4h19v-4H4zM29 16v13h1v-2c2.21 0 4-2.015 4-4.5S32.21 18 30 18v-2h-1zm1 3.5c1.38 0 2.5 1.343 2.5 3s-1.12 3-2.5 3v-6z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M30 19.5v6c1.38 0 2.5-1.343 2.5-3s-1.12-3-2.5-3z",
  fill: "#fff"
}));

export default SvgComponent;