function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 16,
  height: 32
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M5.5 18.5L0 13h11l-5.5 5.5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10 32c-2.761 0-5-5.373-5-12v-.5h1.125C6.46 25.522 7.605 30 9 30c1.657 0 3-6.268 3-14S10.657 2 9 2C7.644 2 6.528 6.237 6.156 12H5v-1C5 4.925 7.015 0 9.5 0h2C14.538 0 16 5.82 16 13v7c0 6.627-2.134 12-6 12z"
}));

export default SvgComponent;