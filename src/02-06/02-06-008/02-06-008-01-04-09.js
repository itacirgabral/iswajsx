function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 22,
  height: 11
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M22 3v8h-8l8-8z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10.5 0c2.623 0 5 1.062 6.719 2.781l2.5 2.5L19 6l-2.5-2.5a8.458 8.458 0 00-6-2.5 8.458 8.458 0 00-6 2.5L.687 7.281 0 6.594 3.781 2.78A9.472 9.472 0 0110.5 0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10.5 1c2.347 0 4.462.962 6 2.5L19 6l-2.125 2.125-2.5-2.5C13.38 4.63 12.019 4 10.5 4c-1.519 0-2.88.63-3.875 1.625L2.812 9.406.688 7.281 4.5 3.5a8.458 8.458 0 016-2.5z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10.5 4c1.519 0 2.88.63 3.875 1.625l2.5 2.5-.688.688-2.5-2.5A4.494 4.494 0 0010.5 5a4.494 4.494 0 00-3.188 1.313l-3.78 3.812-.72-.719 3.813-3.781C7.62 4.63 8.981 4 10.5 4z"
}));

export default SvgComponent;