function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 24,
  height: 24
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M2.828 7.071l16.264 16.264.707-.708L3.536 6.364l-.708.707zM6.988 12.007l-5.5 5.5 5.5 5.5v-11z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9.9 0L0 9.9V0h9.9z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6.364 3.536l16.263 16.263.708-.707L7.07 2.828l-.707.708z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3.536 6.364l16.263 16.263 2.828-2.828L6.364 3.536 3.536 6.364z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M17 5l-.022 2.01c-.238 2.269-1.806 4.546-3.624 6.365-1.819 1.818-4.096 3.386-6.364 3.624v1.016a10.97 10.97 0 007.778-3.226 10.97 10.97 0 003.226-7.778V5.022L17 5z"
}));

export default SvgComponent;