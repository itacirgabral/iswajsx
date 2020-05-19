function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 16,
  height: 25
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M5.5 8.5L0 14h11L5.5 8.5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9.5 0C7.196 0 5.327 3.281 5.062 7.5h1.97C7.196 3.839 8.233 1 9.5 1 10.88 1 12 4.358 12 8.5v8c0 4.142-1.12 7.5-2.5 7.5S7 20.642 7 16.5V15H5v1.5C5 21.194 7.015 25 9.5 25h2c2.485 0 4.5-3.806 4.5-8.5v-8C16 3.806 13.985 0 11.5 0h-2z"
}));

export default SvgComponent;