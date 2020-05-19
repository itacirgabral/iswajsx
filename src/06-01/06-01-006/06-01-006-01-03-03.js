function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 28,
  height: 48
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M14.5 0A8.5 8.5 0 0123 8.5a8.501 8.501 0 01-5 7.75V19h3a7 7 0 017 7v22h-2V26a5 5 0 00-5-5H6v-2h5v-2.75A8.501 8.501 0 016 8.5 8.5 8.5 0 0114.5 0zM22 25v16h-3V25h3zm-12 0v16H7V25h3zm14 19v4H5v-4h19zM5 25v13H4v-2c-2.21 0-4-2.015-4-4.5S1.79 27 4 27v-2h1zm-1 3.5c-1.38 0-2.5 1.343-2.5 3s1.12 3 2.5 3v-6z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4 28.5v6c-1.38 0-2.5-1.343-2.5-3s1.12-3 2.5-3z",
  fill: "#fff"
}));

export default SvgComponent;