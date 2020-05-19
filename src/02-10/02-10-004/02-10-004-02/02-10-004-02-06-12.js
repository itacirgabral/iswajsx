function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 26,
  height: 25
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M21 5.222l-1.414 1.414v4.95h-4.95L13.222 13H21V5.222z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M25.243 23.607c1.698-1.7.245-6.013-3.249-10.187l-.906.906c2.79 3.492 4.26 6.346 3.448 7.16-1.172 1.17-6.554-2.312-12.021-7.779-5.468-5.467-8.95-10.85-7.778-12.02.782-.783 3.452.554 6.761 3.137l.95-.95C8.557.528 4.528-.934 2.968.626L1.556 2.04c-2.148 2.148.933 7.297 6.01 12.374l4.95 4.95c4.686 4.686 9.994 6.976 12.728 4.243z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M17 1.222l-1.414 1.414v4.95h-4.95L9.222 9H17V1.222z"
}));

export default SvgComponent;