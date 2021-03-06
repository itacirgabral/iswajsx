function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 30,
  height: 52
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M16.5 0A8.5 8.5 0 0125 8.5a8.501 8.501 0 01-5 7.75V19h3a7 7 0 017 7v24h-2V26a5 5 0 00-5-5H10a5 5 0 00-5 5v11H3V26a7 7 0 017-7h3v-2.75A8.501 8.501 0 018 8.5 8.5 8.5 0 0116.5 0zM24 24v17h-3V24h3zm-12 0v17H9V24h3zm14 20v4H7v-4h19zM5 39v13H4v-2c-2.21 0-4-2.015-4-4.5S1.79 41 4 41v-2h1zm-1 3.5c-1.38 0-2.5 1.343-2.5 3s1.12 3 2.5 3v-6z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4 42.5v6c-1.38 0-2.5-1.343-2.5-3s1.12-3 2.5-3z",
  fill: "#fff"
}));

export default SvgComponent;