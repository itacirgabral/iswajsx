function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 33,
  height: 16
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M29.657 3.1a4 4 0 010 5.657l-.707.707-1.414-1.414.707-.707a2 2 0 000-2.828l-.707-.707a3 3 0 00-4.243 0l-7.071 7.07 1.26-4.618a1.982 1.982 0 00-.553-1.745 3 3 0 00-4.243 0l-1.414 1.414C8.951 8.25 7.737 15.12 7.737 15.12L.665 8.051s6.871-1.215 9.193-3.536L11.272 3.1a5 5 0 017.071 0 3.99 3.99 0 011.017 1.811l2.519-2.519a5 5 0 017.07 0l.708.708z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M32.485 13H24V4.515L32.485 13zm-2.43-1.016l-5.039-5.039v5.039h5.039z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M30.055 11.984h-5.039V6.945l5.039 5.039z",
  fill: "#fff"
}));

export default SvgComponent;