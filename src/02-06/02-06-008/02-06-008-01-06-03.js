function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 11,
  height: 22
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M3 22h8v-8l-1 1v6H4l-1 1z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 10.5c0 2.623 1.062 5 2.781 6.719l2.5 2.5L6 19l-2.5-2.5a8.458 8.458 0 01-2.5-6c0-2.347.962-4.462 2.5-6L7.281.687 6.594 0 2.78 3.781A9.472 9.472 0 000 10.5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M1 10.5c0 2.347.962 4.462 2.5 6L6 19l2.125-2.125-2.5-2.5C4.63 13.38 4 12.019 4 10.5c0-1.519.63-2.88 1.625-3.875l3.781-3.813L7.281.688 3.5 4.5a8.458 8.458 0 00-2.5 6z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4 10.5c0 1.519.63 2.88 1.625 3.875l2.5 2.5.688-.688-2.5-2.5A4.494 4.494 0 015 10.5c0-1.243.498-2.373 1.313-3.188l3.812-3.78-.719-.72-3.781 3.813C4.63 7.62 4 8.981 4 10.5z"
}));

export default SvgComponent;