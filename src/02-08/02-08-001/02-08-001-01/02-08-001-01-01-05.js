function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 14,
  height: 24
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 17h14l-7 7-7-7zM10 0a4 4 0 00-4 4v6c0 2.539-3 7-3 7h8s-3-4.461-3-7V4a2 2 0 012-2 1 1 0 011 1v6h2V3a3 3 0 00-3-3z"
}));

export default SvgComponent;