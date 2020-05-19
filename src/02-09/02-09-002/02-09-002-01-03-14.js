function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 24,
  height: 32
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M6 0v2l4.5 4.5L6 11v2l6.5-6.5L6 0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6 6v1c-2.21 0-4 2.239-4 5a4 4 0 004 4h7v9a3 3 0 003 3h8v4h-6a7 7 0 01-7-7v-5H8a8 8 0 01-8-8 6 6 0 016-6z"
}));

export default SvgComponent;