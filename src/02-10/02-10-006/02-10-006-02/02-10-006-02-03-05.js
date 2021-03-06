function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 20,
  height: 21
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M14 15c0-2.761-3.134-5-7-5s-7 2.239-7 5 3.134 5 7 5 7-2.239 7-5zm-1.5 0h-11c0-1.933 2.462-3.5 5.5-3.5s5.5 1.567 5.5 3.5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M1.5 15a3.5 5.5 90 1111 0H7z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10 3v8l1.5-1.5v-5h5L18 3h-8zM20 14c0-1.791-.696-3.57-2.063-4.938L14.781 6.22l-1.375 1.375 3.125 2.875a4.978 4.978 0 010 7.062l-2.312 2.063L15.625 21l2.313-2.063A6.963 6.963 0 0020 14z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7 0v8l1.5-1.5v-5h5L15 0H7z"
}));

export default SvgComponent;