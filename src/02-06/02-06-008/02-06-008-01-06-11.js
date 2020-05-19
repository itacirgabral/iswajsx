function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 11,
  height: 22
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M8 22H0v-8l1 1v6h6l1 1z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M11 10.5c0 2.623-1.062 5-2.781 6.719l-2.5 2.5L5 19l2.5-2.5a8.458 8.458 0 002.5-6 8.458 8.458 0 00-2.5-6L3.719.687 4.406 0 8.22 3.781A9.472 9.472 0 0111 10.5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10 10.5a8.458 8.458 0 01-2.5 6L5 19l-2.125-2.125 2.5-2.5C6.37 13.38 7 12.019 7 10.5c0-1.519-.63-2.88-1.625-3.875L1.594 2.812 3.719.688 7.5 4.5a8.458 8.458 0 012.5 6z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7 10.5c0 1.519-.63 2.88-1.625 3.875l-2.5 2.5-.688-.688 2.5-2.5A4.494 4.494 0 006 10.5a4.494 4.494 0 00-1.313-3.188L.876 3.533l.719-.72 3.781 3.813C6.37 7.62 7 8.981 7 10.5z"
}));

export default SvgComponent;