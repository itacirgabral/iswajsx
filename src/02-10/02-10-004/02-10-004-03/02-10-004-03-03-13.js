function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 15,
  height: 40
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M11 20H9l-3.5 3.5L2 20H0l5.5 5.5L11 20z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10.5 40c2.485 0 4.5-3.806 4.5-8.5v-23C15 3.806 12.985 0 10.5 0h-2C6.015 0 3 3.806 3 8.5V13h5V8.5C8 4.358 9.12 2 10.5 2S13 4.358 13 8.5v23c0 4.142-1.12 6.5-2.5 6.5S8 35.642 8 31.5v-5H3v5C3 36.194 6.015 40 8.5 40h2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M11 14H9l-3.5 3.5L2 14H0l5.5 5.5L11 14z"
}));

export default SvgComponent;