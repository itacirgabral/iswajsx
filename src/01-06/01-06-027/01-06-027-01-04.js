function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 20,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M5 17h15v13H5z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M7 19h11v9H7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M18 0h2v15h-2zM1.406 9.594L0 11l4 4h2.813L1.405 9.594z"
}));

export default SvgComponent;