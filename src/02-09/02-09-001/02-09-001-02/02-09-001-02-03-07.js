function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 22,
  height: 21
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M7 0v2L2 7l5 5v2L0 7l7-7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7 6v2h9a4 4 0 014 4v2a3 3 0 01-3 3H2v4h14a6 6 0 006-6v-3a6 6 0 00-6-6H7z"
}));

export default SvgComponent;