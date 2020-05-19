function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 38,
  height: 21
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M15 7l7 7-7 7v-2l5-5-5-5V7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8 0a8 8 0 000 16h7v-4H8c-3.314 0-6-1.79-6-4a6 6 0 016-6h20a8 8 0 018 8v4h2v-4c0-5.523-4.477-10-10-10H8z"
}));

export default SvgComponent;