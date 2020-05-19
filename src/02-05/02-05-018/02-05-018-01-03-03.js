function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 38,
  height: 20
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M7 9v2h6V9H7zm9 0v2h9V9h-9zm12 0v2h10V9H28zM7 17l-7-7 7-7v2.844L2.844 10 7 14.156V17zM9 14l5.5 5.5L20 14h-1.414L14.5 18.086 10.414 14H9z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M17 0a3 3 0 00-3 3v8a3.898 3.898 0 01-1 2.594V15h3v-1.406A3.898 3.898 0 0115 11V3a2 2 0 014 0v4h1V3a3 3 0 00-3-3zM28 3l4.5 4.5L37 3h-1.406L32.5 6.094 29.406 3H28z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M29.5 0C27.567 0 26 1.343 26 3v8c0 4.418-1.79 8-4 8h9c-2.21 0-4-3.582-4-8V3c0-1.105 1.12-2 2.5-2s2.5.895 2.5 2h1c0-1.657-1.567-3-3.5-3z"
}));

export default SvgComponent;