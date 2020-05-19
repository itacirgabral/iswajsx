function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 31,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M17 23h14l-7 7-7-7zM7.5 0a5.5 5.5 0 010 11H7a3 3 0 000 6h5c.318 0 1.82-.334 2.375-.625l2.5-1.313c1.188-.681 1.994-.904 3.125-1.062a5 5 0 015 5v4h-2v-4c0-2.21-1.343-4-3-4-.763 0-1.47.377-2 1l-3.156 2.844A4.01 4.01 0 0112 20H8A6 6 0 018 8c1.699-.24 3-1.735 3-3.5A3.5 3.5 0 007.5 1H0V0h7.5z"
}));

export default SvgComponent;