function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 14,
  height: 24
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M10 0a4 4 0 00-4 4v5.563C5.409 9.22 4.733 9 4 9a4 4 0 00-4 4v11h2V13a2 2 0 014 0v3h2V4a2 2 0 014 0v5h2V4a4 4 0 00-4-4z"
}));

export default SvgComponent;