function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 40,
  height: 15
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M7 0L0 7h2.719l4.219-4.25L11.188 7H14L7 0zM6 7h2v7H6V7zM20 15l-7-7h2.719l4.219 4.25L24.188 8H27l-7 7zM19 8h2V1h-2v7zM33 0l-7 7h2.719l4.218-4.25L37.188 7H40l-7-7zM32 7h2v7h-2V7z"
}));

export default SvgComponent;