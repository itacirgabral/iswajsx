function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 22,
  height: 23
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M22 9.9V0h-9.9l2.011 2.01h5.878V7.89L22 9.899z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M17.757 5.657L1.494 21.92.08 20.506 16.343 4.243l1.414 1.414zM15 23l5.5-5.5L15 12v1.414l4.086 4.086L15 21.586V23z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4 7c0 6.075 4.925 11 11 11v-1C9.477 17 5 12.523 5 7V5H4v2z"
}));

export default SvgComponent;