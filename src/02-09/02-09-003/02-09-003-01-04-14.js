function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 24,
  height: 26
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M6 0v1C3.79 1 2 3.239 2 6c0 2.21 2.126 3.792 4 4l5 .563V10a4 4 0 014-4 3 3 0 013 3 5 5 0 01-5 5v5a3 3 0 003 3h8v4h-6a7 7 0 01-7-7v-5H8a8 8 0 01-8-8 6 6 0 016-6zm9 7a2 2 0 00-2 2v1.781L15 11a2 2 0 000-4z"
}));

export default SvgComponent;