function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 26,
  height: 21
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M11 8h15v13H11z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M13 10h11v9H13z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8 0C4 0 4 4 4 4v1c0 4 4 4 4 4V7C6 7 6 5 6 5V4c0-2 2-2 2-2h1c2 0 2 2 2 2v2h2V4c0-4-4-4-4-4H8zM1.813 5L.405 6.406 10 16v-2.813L1.812 5z"
}));

export default SvgComponent;