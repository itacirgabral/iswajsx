function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 16,
  height: 25
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M16 12h-2l-3.5-3.5L7 12H5l5.5-5.5L16 12z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6.5 0c1.92 0 3.517 2.3 4.156 5.5H8.781C8.396 2.858 7.522 1 6.5 1 5.12 1 4 4.358 4 8.5v8C4 20.642 5.12 24 6.5 24c1.085 0 1.998-2.1 2.344-5h1.937c-.567 3.468-2.259 6-4.281 6h-2C2.015 25 0 21.194 0 16.5v-8C0 3.806 2.015 0 4.5 0h2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16 18h-2l-3.5-3.5L7 18H5l5.5-5.5L16 18z"
}));

export default SvgComponent;