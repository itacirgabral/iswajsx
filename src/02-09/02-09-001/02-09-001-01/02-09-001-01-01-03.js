function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 19,
  height: 16
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M5 0a5 5 0 00-5 5v2a5 5 0 005 5h8V9H5a3 3 0 01-3-3V4a3 3 0 013-3h12V0H5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M13 5v11l5.5-5.5L13 5z"
}));

export default SvgComponent;