function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 32,
  height: 20
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M7 9v2h9V9H7zm12 0v2h13V9H19zM7 17l-7-7 7-7v2.844L2.844 10 7 14.156V17zM12 14l5.5 5.5L23 14h-1.414L17.5 18.086 13.414 14H12z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M20 0a3 3 0 00-3 3v8a3.898 3.898 0 01-1 2.594V15h3v-1.406A3.898 3.898 0 0118 11V3a2 2 0 014 0v4h1V3a3 3 0 00-3-3z"
}));

export default SvgComponent;