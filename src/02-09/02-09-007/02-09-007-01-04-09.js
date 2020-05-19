function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 23,
  height: 16
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M23 8V1l-7 7h7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M11.5 0a9.956 9.956 0 017.063 2.938l1.312 1.187-.75.75-1.25-1.25A8.988 8.988 0 0011.5 1a8.988 8.988 0 00-6.375 2.625L.719 8 0 7.281l4.438-4.343A9.956 9.956 0 0111.5 0zM0 16V9l7 7H0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M11.5 8a9.956 9.956 0 00-7.063 2.938l-1.312 1.187.75.75 1.25-1.25A8.988 8.988 0 0111.5 9c2.485 0 4.746.996 6.375 2.625L22.281 16l.719-.719-4.438-4.344A9.956 9.956 0 0011.5 8z"
}));

export default SvgComponent;