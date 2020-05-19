function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 26,
  height: 24
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M21.5 17.5L26 13h-9l4.5 4.5zM12 0c5.523 0 10 4.477 10 10v3h-1v-3a9 9 0 00-9-9H6V0h6zM15.5 23.5L20 19h-9l4.5 4.5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6 6c5.523 0 10 4.477 10 10v3h-1v-3a9 9 0 00-9-9H0V6h6z"
}));

export default SvgComponent;