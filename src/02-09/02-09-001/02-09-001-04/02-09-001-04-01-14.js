function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 34,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M18 9H0l9-9 9 9zM10 9v11a6 6 0 006 6h18v4H17a9 9 0 01-9-9V9h2z"
}));

export default SvgComponent;