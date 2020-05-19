function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 25,
  height: 26
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M7 13h7.778L7 20.778V13zm1.016 1.016v4.331l4.331-4.33h-4.33z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M1.343.98c1.953-1.953 7.335.263 12.021 4.949l6.364 6.364c4.296 4.296 6.353 9.203 4.596 10.96l-1.414 1.414c-2.148 2.148-8.005-.226-13.082-5.303l3.58-3.58c4.617 4.268 8.656 6.9 9.502 6.055.976-.976-2.664-6.2-8.132-11.667C9.311 4.704 4.088 1.064 3.111 2.04c-.776.776 1.405 4.244 5.06 8.375L4.525 14.06C.115 9.43-1.32 3.643 1.343.979z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8.016 14.016h4.331l-4.33 4.331v-4.33z",
  fill: "#fff"
}));

export default SvgComponent;