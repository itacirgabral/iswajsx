function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 33,
  height: 32
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M13.219 17l1.5 1.5H19.5v4.781l1.5 1.5V17h-7.781z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M29.839 1.09C28.08-.667 23.966.6 20.646 3.92L4.383 20.182c-3.32 3.32-4.586 7.435-2.828 9.192l1.414 1.415c1.757 1.757 6.58 1.198 9.9-2.122l5.303-5.303-3.536-3.536-5.303 5.304c-2.93 2.929-5.388 3.804-6.364 2.828-.977-.976-.1-3.435 2.828-6.364L22.061 5.333c2.929-2.93 5.387-3.805 6.364-2.829.976.977.1 3.435-2.829 6.364l-5.657 5.657 3.536 3.536 5.657-5.657c3.32-3.32 3.878-8.142 2.121-9.9L29.839 1.09z"
}));

export default SvgComponent;