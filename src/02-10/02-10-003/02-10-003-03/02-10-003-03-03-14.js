function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 32,
  height: 33
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M17 13.219l1.5 1.5V19.5h4.781l1.5 1.5H17v-7.781z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M1.09 29.839C-.667 28.08.6 23.966 3.92 20.646L20.182 4.383c3.32-3.32 7.435-4.586 9.192-2.828l1.415 1.414c1.757 1.757 1.198 6.58-2.122 9.9l-5.303 5.303-3.536-3.536 5.304-5.303c2.929-2.93 3.804-5.388 2.828-6.364-.976-.977-3.435-.1-6.364 2.828L5.333 22.061c-2.93 2.929-3.805 5.387-2.829 6.364.977.976 3.435.1 6.364-2.829l5.657-5.657 3.536 3.536-5.657 5.657c-3.32 3.32-8.142 3.878-9.9 2.121L1.09 29.839z"
}));

export default SvgComponent;