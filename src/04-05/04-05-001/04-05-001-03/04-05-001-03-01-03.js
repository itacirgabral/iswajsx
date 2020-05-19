function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 35,
  height: 35
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M17.5 0C7.835 0 0 7.835 0 17.5S7.835 35 17.5 35 35 27.165 35 17.5 27.165 0 17.5 0zm0 2C26.06 2 33 8.94 33 17.5 33 26.06 26.06 33 17.5 33 8.94 33 2 26.06 2 17.5 2 8.94 8.94 2 17.5 2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14 25v2h11v-2H14z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8.5 26c0-2.21 2.239-4 5-4h1v1h-1a3 3 0 000 6h1v1h-1c-2.761 0-5-1.79-5-4z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M15.5 26a2 2 0 11-4 0 2 2 0 114 0z"
}));

export default SvgComponent;