function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 28,
  height: 48
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M14.5 0A8.5 8.5 0 006 8.5a8.501 8.501 0 005 7.75V19H8a7 7 0 00-7 7v22h2V26a5 5 0 015-5h13a5 5 0 015 5v22h2V26a7 7 0 00-7-7h-3v-2.75a8.501 8.501 0 005-7.75A8.5 8.5 0 0014.5 0zM7 26v15h3V26H7zm12 0v15h3V26h-3zM5 44v4h19v-4H5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4.5 16a4.5 4.5 0 110 9 4.5 4.5 0 010-9z"
}));

export default SvgComponent;