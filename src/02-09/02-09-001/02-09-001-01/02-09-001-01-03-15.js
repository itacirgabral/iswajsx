function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 20,
  height: 17
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M5 5a5 5 0 00-5 5v2a5 5 0 005 5h12v-3H5a3 3 0 01-3-3V9a3 3 0 013-3h9V5H5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14 0l5.5 5.5L14 11V9.5l4-4-4-4V0z"
}));

export default SvgComponent;