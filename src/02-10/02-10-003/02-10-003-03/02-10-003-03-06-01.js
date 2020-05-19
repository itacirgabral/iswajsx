function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 17,
  height: 40
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 23h2l3.5-3.5L9 23h2l-5.5-5.5L0 23z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9.5 0C7.015 0 5 3.806 5 8.5v8h2v-8C7 4.358 8.12 2 9.5 2S13 4.358 13 8.5v23c0 4.142-2.12 6.5-3.5 6.5S7 35.642 7 31.5V24H5v7.5C5 36.194 7.015 40 9.5 40h2c2.485 0 5.5-3.806 5.5-8.5v-23C17 3.806 13.985 0 11.5 0h-2z"
}));

export default SvgComponent;