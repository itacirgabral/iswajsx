function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 15,
  height: 40
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M11 23H0l5.5-5.5L11 23z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10.5 0C12.985 0 15 3.806 15 8.5v23c0 4.694-2.015 8.5-4.5 8.5h-2C6.015 40 3 36.194 3 31.5V24h5v7.5c0 4.142 1.12 6.5 2.5 6.5s2.5-2.358 2.5-6.5v-23C13 4.358 11.88 2 10.5 2S8 4.358 8 8.5v8H3v-8C3 3.806 6.015 0 8.5 0h2z"
}));

export default SvgComponent;