function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 18,
  height: 20
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M12 14c2.761 0 5-3.134 5-7s-2.239-7-5-7-5 3.134-5 7 2.239 7 5 7zm0-1.5v-11c1.933 0 3.5 2.462 3.5 5.5s-1.567 5.5-3.5 5.5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 1.5v11c1.933 0 3.5-2.462 3.5-5.5S13.933 1.5 12 1.5z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8 10l-8 8v-8h8zm-2.406 1H1v4.563L5.594 11zM11 20a6.963 6.963 0 01-4.938-2.063L3.22 14.781l1.375-1.375 2.875 3.125a4.978 4.978 0 007.062 0l2.063-2.312L18 15.625l-2.063 2.313A6.963 6.963 0 0111 20z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5.594 11L1 15.563V11h4.594z",
  fill: "#fff"
}));

export default SvgComponent;