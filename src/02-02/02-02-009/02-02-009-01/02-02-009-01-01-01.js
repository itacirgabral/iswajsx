function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 19,
  height: 32
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M7.071 1.016V0H0v7.071h1.016V1.016h6.055zM18.656 22.567L13 16.91l-1.414 1.415 4.243 4.242-4.243 4.243 1.414 1.414 5.657-5.657z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4.344 2.969l-.75.719A31.24 31.24 0 017.219 6.03h1.656A32.86 32.86 0 004.344 2.97zM14 11.375l.031 1.875c.944 1.669 1.57 3.418 1.969 5.25l1.219 1.219A19.976 19.976 0 0014 11.375zm3.25 14.031L16 26.625a19.263 19.263 0 01-1.75 4.875l.875.5a20.177 20.177 0 002.125-6.594zM13.071 7.016v8h-2v-6h-6v-2h8z"
}));

export default SvgComponent;