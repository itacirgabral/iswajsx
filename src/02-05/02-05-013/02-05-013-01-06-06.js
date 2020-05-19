function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 22,
  height: 23
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M22 13.1V23h-9.9l2.011-2.01h5.878V15.11L22 13.101z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M17.757 17.343L1.494 1.08.08 2.494l16.263 16.263 1.414-1.414zM15 0l5.5 5.5L15 11V9.586L19.086 5.5 15 1.414V0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4 16C4 9.925 8.925 5 15 5v1C9.477 6 5 10.477 5 16v2H4v-2z"
}));

export default SvgComponent;