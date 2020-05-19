function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 28,
  height: 20
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M23.5 17.5L28 13h-9l4.5 4.5zM14 0c5.523 0 10 4.477 10 10v3h-1v-3a9 9 0 00-9-9H8V0h6zM.5 6.5L5 2v9L.5 6.5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8 6c5.523 0 10 4.477 10 10v4h-1v-4a9 9 0 00-9-9H5V6h3z"
}));

export default SvgComponent;