function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 33,
  height: 17
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M33 0v9.9L23.1 0H33zm-1.016 1.016L25.509.994l6.497 6.497-.022-6.475z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M28.757 5.657l-4.242 4.242a5 5 0 01-7.071 0 4.978 4.978 0 01-1.459-3.535v-1.06c0-.257-.114-.513-.31-.708a1 1 0 00-1.413 0l-2.475 2.475c-2.539 2.539-4.243 9.9-4.243 9.9L.474 9.899s7.36-1.704 9.899-4.242l2.474-2.475a3 3 0 014.243 0c.586.586.884 1.354.884 2.121v1.061c0 .768.298 1.535.884 2.121a3 3 0 004.243 0l4.242-4.242 1.414 1.414z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M31.984 1.016l.022 6.475L25.509.994l6.475.022z",
  fill: "#fff"
}));

export default SvgComponent;