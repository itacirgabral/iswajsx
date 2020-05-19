function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 29,
  height: 22
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M2.13 2.201a6 6 0 018.485 0l7.071 7.071c2.108 2.108 8.486 2.829 8.486 2.829L19.1 19.17s-.72-6.377-2.829-8.485l-7.071-7.07a4 4 0 00-5.657 0 3 3 0 000 4.242l3.536 3.535-1.415 1.415L2.13 9.272a5 5 0 010-7.071z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M29 9.272V22H16.272L29 9.272zm-1.016 2.43l-9.281 9.282 9.303.022-.022-9.303z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M27.984 11.703l.022 9.303-9.303-.022 9.28-9.281z",
  fill: "#fff"
}));

export default SvgComponent;