function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 21,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M21 22a8 8 0 11-16 0 8 8 0 1116 0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19 22a6 6 0 11-12 0 6 6 0 1112 0z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9.406 2.406L7.97 3.812l10.031 10V14h2v-1L9.406 2.406z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 0v13h2V0h-2zM1.406 9.594L0 11l5 5a9.907 9.907 0 011.375-1.469L1.406 9.594z"
}));

export default SvgComponent;