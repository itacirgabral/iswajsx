function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 35,
  height: 35
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M33.812 11.25L23 17.5l10.812 6.25c.77-2.008 1.046-4.12 1.187-6.25.027-2.152-.538-4.222-1.187-6.25zm-.875 2.25c.334 1.288.562 2.607.562 4 0 1.393-.228 2.712-.562 4l-6.906-4 6.906-4zM1.188 11.25L12 17.5 1.188 23.75C.418 21.742.142 19.63.001 17.5c-.027-2.152.538-4.222 1.187-6.25zm.875 2.25c-.334 1.288-.562 2.607-.562 4 0 1.393.228 2.712.562 4l6.906-4-6.906-4z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M17.5 0C7.835 0 0 7.835 0 17.5S7.835 35 17.5 35 35 27.165 35 17.5 27.165 0 17.5 0zm0 1.5c8.837 0 16 7.163 16 16s-7.163 16-16 16-16-7.163-16-16 7.163-16 16-16z"
}));

export default SvgComponent;