function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 21,
  height: 17
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M13 0C6.875 0 6.096 4.602 6 5.75V6c0 6 6 6 6 6h3v-2h-3c-4 0-4-4-4-4 0-4 5-4 5-4 1.246 0 2.218.278 3 .688v11.156c-1.462.889-3.04 1.11-3.688 1.156H12c-5.519 0-8.484-2.54-10.094-5.281L0 10.813C3.872 16.997 12 17 12 17c9 0 9-9 9-9 0-8-8-8-8-8z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M13 2S8 2 8 6c0 0 0 4 4 4h3v2h1V2.687C15.218 2.277 14.246 2 13 2z",
  fill: "#fff"
}));

export default SvgComponent;