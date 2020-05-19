function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 20,
  height: 15
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M5 0h15v15H5z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M5 4h15v3H5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M1.719 5.344L5 11.03V15L0 6.344l1.719-1z"
}));

export default SvgComponent;