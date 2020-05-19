function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 29,
  height: 19
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M14 4h15v15H14z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M16 6h6v11h-6z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14 8H1v2h13V8zM14 6H0V4h14v2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6.594.188L4 1.688 14 19v-6L6.594.187z"
}));

export default SvgComponent;