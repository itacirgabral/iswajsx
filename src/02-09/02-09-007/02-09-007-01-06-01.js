function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 23,
  height: 16
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M7 8L6 7H1V2L0 1v7h7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M11.5 0a9.956 9.956 0 00-7.063 2.938L3.125 4.125l.75.75 1.25-1.25A8.988 8.988 0 0111.5 1c2.485 0 4.746.996 6.375 2.625L22.281 8 23 7.281l-4.438-4.343A9.956 9.956 0 0011.5 0zM16 16l1-1h5v-5l1-1v7h-7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M11.5 8a9.956 9.956 0 017.063 2.938l1.312 1.187-.75.75-1.25-1.25A8.988 8.988 0 0011.5 9a8.988 8.988 0 00-6.375 2.625L.719 16 0 15.281l4.438-4.344A9.956 9.956 0 0111.5 8z"
}));

export default SvgComponent;