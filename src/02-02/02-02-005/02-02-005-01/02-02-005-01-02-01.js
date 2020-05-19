function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 28,
  height: 8
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M4 0a4 4 0 100 8 4 4 0 000-8zm0 2a2 2 0 110 4 2 2 0 010-4zM14 0a4 4 0 100 8 4 4 0 000-8zm0 2a2 2 0 110 4 2 2 0 010-4zM24 0a4 4 0 100 8 4 4 0 000-8zm0 2a2 2 0 110 4 2 2 0 010-4z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14 2a2 2 0 100 4 2 2 0 000-4zM24 2a2 2 0 100 4 2 2 0 000-4zM4 2a2 2 0 100 4 2 2 0 000-4z",
  fill: "#fff"
}));

export default SvgComponent;