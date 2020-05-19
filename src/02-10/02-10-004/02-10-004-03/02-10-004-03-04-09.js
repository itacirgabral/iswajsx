function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 17,
  height: 40
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M11.5 14.5L17 20H6l5.5-5.5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7.5 0C9.985 0 12 3.806 12 8.5v5h-2v-5C10 4.358 8.88 2 7.5 2S4 4.358 4 8.5v23C4 35.642 6.12 38 7.5 38s2.5-2.358 2.5-6.5V27h2v4.5c0 4.694-2.015 8.5-4.5 8.5h-2C3.015 40 0 36.194 0 31.5v-23C0 3.806 3.015 0 5.5 0h2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M11.5 20.5L17 26H6l5.5-5.5z"
}));

export default SvgComponent;