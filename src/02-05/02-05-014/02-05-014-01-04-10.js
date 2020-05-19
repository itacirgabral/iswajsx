function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 25,
  height: 28
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M19.799 5.657L1.414 24.042 0 22.628 18.385 4.243l1.414 1.414zM19 10l5.5 5.5L19 21V10z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14.1 0L24 9.9V0h-9.9zM8 5c0 6.075 4.925 11 11 11v-1C13.477 15 9 10.523 9 5V3H8v2zM12 17l5.5 5.5L12 28V17z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M1 12c0 6.075 4.925 11 11 11v-1C6.477 22 2 17.523 2 12v-2H1v2z"
}));

export default SvgComponent;