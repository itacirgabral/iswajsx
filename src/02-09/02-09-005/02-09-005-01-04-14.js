function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 20,
  height: 18
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M4.5.5L0 5h9L4.5.5zM14 18C8.477 18 4 13.523 4 8V5h1v3a9 9 0 009 9h6v1h-6z"
}));

export default SvgComponent;