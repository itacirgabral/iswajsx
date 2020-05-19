function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 27,
  height: 48
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M13.5 0A8.5 8.5 0 005 8.5c0 3.257 1.842 6.073 4.531 7.5h7.938C20.159 14.573 22 11.757 22 8.5A8.5 8.5 0 0013.5 0zM7 19a7 7 0 00-7 7v22h2V26a5 5 0 015-5h13a5 5 0 015 5v22h2V26a7 7 0 00-7-7H7zm-1 7v15h3V26H6zm12 0v15h3V26h-3zM4 44v4h19v-4H4z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M13.5 17a4.5 4.5 0 100 9 4.5 4.5 0 000-9z"
}));

export default SvgComponent;