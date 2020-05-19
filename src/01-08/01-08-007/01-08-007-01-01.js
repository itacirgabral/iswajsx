function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 17,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M9 13v17s8 0 8-5v-7s0-5-8-5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10 14.094v14.875c5.977-.37 6-3.969 6-3.969v-5.5V18c0-3.083-4.069-3.755-6-3.906z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M15 0v14.563c1.608 1.177 1.937 2.665 2 3.218V0h-2zM0 19h2s0-4 7-4v-2s-9 0-9 6zM9 3v10c.743 0 1.389.047 2 .125V3H9z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4.063 6.219L2.625 7.625l5.438 5.438C8.604 13.018 9 13 9 13v-1.813L4.062 6.22zM9 30v-2s-8 0-8-3H0c.077.077 0 5 9 5z"
}));

export default SvgComponent;