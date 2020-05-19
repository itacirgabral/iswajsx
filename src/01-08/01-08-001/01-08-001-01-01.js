function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 20,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M5 15h15v15H5z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M7 17h11v11H7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M18 0h2v15h-2zM9 5H7v10h2V5zM1.406 9.406L0 10.844l5 5V15h2L1.406 9.406z"
}));

export default SvgComponent;