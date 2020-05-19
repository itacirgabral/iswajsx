function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 54,
  height: 10
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 5h42v4H0V5zM49 0l-5 5 .719.719L49 1.437l4.281 4.282L54 5l-5-5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M47 4h1v6h-1V4zM50 4h1v6h-1V4z"
}));

export default SvgComponent;