function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 15,
  height: 6
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M8 4.25v1.5h7v-1.5H8zM4 3a2 2 0 00-2 2v.75h4V5a2 2 0 00-2-2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4 0a4 4 0 00-4 4v1.75h1V4c0-1.38 1.343-2.5 3-2.5S7 2.62 7 4v1.75h1V4a4 4 0 00-4-4z"
}));

export default SvgComponent;