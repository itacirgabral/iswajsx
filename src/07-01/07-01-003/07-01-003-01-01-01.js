function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 60,
  height: 15
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M30 0A66.56 66.56 0 000 7.125v2.219A64.651 64.651 0 0130 2a64.651 64.651 0 0130 7.344V7.125A66.56 66.56 0 0030 0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M30 2A64.651 64.651 0 000 9.344v4.562A60.702 60.702 0 0130 6a60.702 60.702 0 0130 7.906V9.344A64.651 64.651 0 0030 2z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M30 6a60.702 60.702 0 00-30 7.906V15h2.125A58.741 58.741 0 0130 8a58.741 58.741 0 0127.875 7H60v-1.094A60.702 60.702 0 0030 6z"
}));

export default SvgComponent;