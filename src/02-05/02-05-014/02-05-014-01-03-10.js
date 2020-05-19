function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 25,
  height: 28
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M24 9.9V0h-9.9l2.011 2.01h5.878V7.89L24 9.899z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19.799 5.657L1.414 24.042 0 22.628 18.385 4.243l1.414 1.414zM25 15l-5.5 5.5L14 15h1.414l4.086 4.086L23.586 15H25z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9 4c6.075 0 11 4.925 11 11h-1C19 9.477 14.523 5 9 5H7V4h2zM18 22l-5.5 5.5L7 22h1.414l4.086 4.086L16.586 22H18z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2 11c6.075 0 11 4.925 11 11h-1c0-5.523-4.477-10-10-10H0v-1h2z"
}));

export default SvgComponent;