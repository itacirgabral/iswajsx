function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 28,
  height: 20
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M4.5 17.5L0 13h9l-4.5 4.5zM14 0C8.477 0 4 4.477 4 10v3h1v-3a9 9 0 019-9h6V0h-6zM27.5 6.5L23 2v9l4.5-4.5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M20 6c-5.523 0-10 4.477-10 10v4h1v-4a9 9 0 019-9h3V6h-3z"
}));

export default SvgComponent;