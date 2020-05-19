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
  d: "M11 0h2v15h-2zM3.5 3.75l-1.719 1L7.72 15H10L3.5 3.75zM1.469 10.625L.062 12.063 3 15h2.813l-4.344-4.375z"
}));

export default SvgComponent;