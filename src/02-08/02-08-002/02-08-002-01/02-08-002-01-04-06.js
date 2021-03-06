function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 14,
  height: 24
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M4 0a4 4 0 014 4v5.563C8.591 9.22 9.267 9 10 9a4 4 0 014 4v11h-2V13a2 2 0 10-4 0v3H6V4a2 2 0 00-4 0v5H0V4a4 4 0 014-4z"
}));

export default SvgComponent;