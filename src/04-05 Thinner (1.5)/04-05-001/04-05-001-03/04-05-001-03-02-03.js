function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 15,
  height: 8
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M5 3.25v1.5h10v-1.5H5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7 4a2 2 0 11-4 0 2 2 0 114 0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4 0a4 4 0 100 8h2V7H4C2.62 7 1.5 5.657 1.5 4S2.62 1 4 1h2V0H4z"
}));

export default SvgComponent;