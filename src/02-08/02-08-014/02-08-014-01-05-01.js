function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 26,
  height: 22
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M21.5 13.5L17 18h9l-4.5-4.5zm0 .969l2.813 2.844h-5.625l2.812-2.844z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M15 0v17c0 1.657.895 3 2 3a2 2 0 002-2h5a4 4 0 01-4 4h-1a5 5 0 01-5-5V0h1zM4.5.5L0 5h9L4.5.5zm0 .969l2.813 2.843H1.688L4.5 1.47zM4 5v13a4 4 0 004 4 5 5 0 005-5H8c0 1.657-.672 3-1.5 3S5 18.657 5 17V5H4z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M21.5 14.469l-2.813 2.844h5.625L21.5 14.469zM4.5 1.469L1.687 4.312h5.625L4.5 1.47z",
  fill: "#fff"
}));

export default SvgComponent;