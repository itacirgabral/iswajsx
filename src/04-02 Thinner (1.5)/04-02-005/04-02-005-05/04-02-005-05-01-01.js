function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 35,
  height: 35
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M17.5 0C7.835 0 0 7.835 0 17.5S7.835 35 17.5 35 35 27.165 35 17.5 27.165 0 17.5 0zm0 1.5c8.837 0 16 7.163 16 16s-7.163 16-16 16-16-7.163-16-16 7.163-16 16-16z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M11.5 10C9.015 10 7 11.79 7 14H6v1h1c0 2.21 2.015 4 4.5 4s4.5-1.79 4.5-4h1v-1h-1c0-2.21-2.015-4-4.5-4zm0 1.5c1.933 0 3.5 1.12 3.5 2.5H8c0-1.38 1.567-2.5 3.5-2.5zM8 15h7c0 1.38-1.567 2.5-3.5 2.5S8 16.38 8 15zM23.5 10c-2.485 0-4.5 1.79-4.5 4h-1v1h1c0 2.21 2.015 4 4.5 4s4.5-1.79 4.5-4h1v-1h-1c0-2.21-2.015-4-4.5-4zm0 1.5c1.933 0 3.5 1.12 3.5 2.5h-7c0-1.38 1.567-2.5 3.5-2.5zM20 15h7c0 1.38-1.567 2.5-3.5 2.5S20 16.38 20 15z"
}));

export default SvgComponent;