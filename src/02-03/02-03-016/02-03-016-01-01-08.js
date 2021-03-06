function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 25,
  height: 24
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M17.929 2.828L1.665 19.092l.708.707L18.636 3.536l-.707-.708zM6 14L.5 8.5 6 3v11z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M25 9.9L15.1 0H25v9.9z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M21.464 6.364L5.201 22.627l.707.708L22.172 7.07l-.708-.707z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M17 19c0-6.075-4.925-11-11-11v1c5.523 0 10 4.477 10 10v2h1v-2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M18.636 3.536L2.373 19.799 5.2 22.627 21.464 6.364l-2.828-2.828z",
  fill: "#fff"
}));

export default SvgComponent;