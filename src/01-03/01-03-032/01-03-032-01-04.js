function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 29,
  height: 15
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M16 0h13v15H16z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M18 2h9v11h-9z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14 4H1v2h13V4zM14 2H0V0h14v2zM2.938 9.969l-.532 1.937L14 15v-2.094L2.937 9.97z"
}));

export default SvgComponent;