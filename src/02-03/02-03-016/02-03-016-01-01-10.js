function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 24,
  height: 25
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M21.172 7.071L4.908 23.335l-.707-.708L20.464 6.364l.708.707zM10 19l5.5 5.5L21 19H10z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14.1 0L24 9.9V0h-9.9z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M17.636 3.536L1.373 19.799l-.708-.707L16.93 2.828l.707.708z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5 8c6.075 0 11 4.925 11 11h-1c0-5.523-4.477-10-10-10H3V8h2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M20.464 6.364L4.201 22.627 1.373 19.8 17.636 3.536l2.828 2.828z",
  fill: "#fff"
}));

export default SvgComponent;