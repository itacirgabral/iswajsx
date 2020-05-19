function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 20,
  height: 21
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M14 6c0-2.761-3.134-5-7-5S0 3.239 0 6s3.134 5 7 5 7-2.239 7-5zm-1.5 0h-11c0-1.933 2.462-3.5 5.5-3.5s5.5 1.567 5.5 3.5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7 2.5C3.962 2.5 1.5 4.067 1.5 6h11c0-1.933-2.462-3.5-5.5-3.5z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10 18h8l-8-8v8zM20 7c0 1.791-.696 3.57-2.063 4.938l-3.156 2.843-1.375-1.375 3.125-2.875a4.978 4.978 0 000-7.062L14.22 1.406 15.625 0l2.313 2.063A6.963 6.963 0 0120 7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7 21h8l-8-8v8z"
}));

export default SvgComponent;