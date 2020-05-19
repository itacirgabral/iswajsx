function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 28,
  height: 20
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M28 13l-4.5 4.5L19 13h1.438l3.062 3.063L26.563 13H28zM14 0c5.523 0 10 4.477 10 10v3h-1v-3a9 9 0 00-9-9H8V0h6zM5 2L.5 6.5 5 11V9.562L1.937 6.5 5 3.437V2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8 6c5.523 0 10 4.477 10 10v4h-1v-4a9 9 0 00-9-9H5V6h3z"
}));

export default SvgComponent;