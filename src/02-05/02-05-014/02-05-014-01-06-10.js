function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 25,
  height: 28
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M25 9.9V0h-9.9l2.011 2.01h5.878V7.89L25 9.899z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M20.799 5.657L2.414 24.042 1 22.628 19.385 4.243l1.414 1.414zM13 28l5.5-5.5L13 17v1.414l4.086 4.086L13 26.586V28z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2 12c0 6.075 4.925 11 11 11v-1C7.477 22 3 17.523 3 12v-2H2v2zM20 21l5.5-5.5L20 10v1.414l4.086 4.086L20 19.586V21z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9 5c0 6.075 4.925 11 11 11v-1c-5.523 0-10-4.477-10-10V3H9v2z"
}));

export default SvgComponent;