function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 19,
  height: 21
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M19 5c0 7.18-5.82 13-13 13v-1c6.627 0 12-5.373 12-12V3h1v2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M18 5c0 6.627-5.373 12-12 12v-3a9 9 0 009-9V3h3v2z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4.15 5.565L17.587 19 19 17.586 5.565 4.15 4.151 5.565z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M15 5a9 9 0 01-9 9v-1a8 8 0 008-8V3h1v2zM6 10L.5 15.5 6 21V10zM9.9 0L0 9.9V0h9.9z"
}));

export default SvgComponent;