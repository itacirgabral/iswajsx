function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 16,
  height: 16
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M8 0A8 8 0 00.25 6h15.5A8 8 0 008 0zM.25 10A8 8 0 008 16a8 8 0 007.75-6H.25z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8 2a5.997 5.997 0 00-5.656 4H.25A8.054 8.054 0 000 8c0 .689.086 1.362.25 2h2.094A5.997 5.997 0 008 14v-4h7.75c.164-.638.25-1.311.25-2 0-.689-.086-1.362-.25-2H8V2z",
  fill: "#fff"
}));

export default SvgComponent;