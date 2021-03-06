function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 24,
  height: 23
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 0v1h6.5A3.5 3.5 0 0110 4.5C10 6.265 8.699 7.76 7 8a6 6 0 000 12h4a4.01 4.01 0 002.844-1.156L17 16c.53-.623 1.237-1 2-1 1.657 0 3 1.79 3 4v4h2v-4a5 5 0 00-5-5c-1.131.158-1.937.38-3.125 1.063l-2.5 1.312C12.82 16.666 11.318 17 11 17H6a3 3 0 010-6h.5a5.5 5.5 0 000-11H0z"
}));

export default SvgComponent;