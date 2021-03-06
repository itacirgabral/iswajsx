function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 26,
  height: 25
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M13 18h7.781l-1.5-1.5H14.5v-4.781l-1.5-1.5V18z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M.98 23.657c-1.953-1.953.263-7.335 4.949-12.021l6.364-6.364C16.589.976 21.496-1.08 23.253.676l1.414 1.414c2.148 2.148-.226 8.005-5.303 13.082l-3.58-3.58c4.268-4.617 6.9-8.656 6.055-9.502-.976-.976-6.2 2.664-11.667 8.132-5.468 5.467-9.108 10.69-8.132 11.667.776.776 4.244-1.405 8.375-5.06l3.646 3.646C9.43 24.885 3.643 26.32.979 23.657z"
}));

export default SvgComponent;