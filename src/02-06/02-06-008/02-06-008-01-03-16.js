function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 23,
  height: 20
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 .719L.719 0 20 19.281l-.719.719L0 .719zM16 .5v2l5 5-5 5v2l7-7-7-7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9 14.5c0-1.407.551-2.801 1.625-3.875A5.467 5.467 0 0114.5 9H16v1h-1.5a4.493 4.493 0 00-3.188 1.313A4.493 4.493 0 0010 14.5V20H9v-5.5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6 14.5c0-2.175.84-4.34 2.5-6a8.462 8.462 0 016-2.5H16v3h-1.5a5.467 5.467 0 00-3.875 1.625A5.467 5.467 0 009 14.5V20H6v-5.5z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5 14.5c0-2.43.927-4.864 2.781-6.719A9.473 9.473 0 0114.5 5H16v1h-1.5c-2.175 0-4.34.84-6 2.5a8.462 8.462 0 00-2.5 6V20H5v-5.5z"
}));

export default SvgComponent;