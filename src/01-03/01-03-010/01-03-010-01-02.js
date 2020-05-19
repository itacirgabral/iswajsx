function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 24,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M9 15h15v15H9z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M11 17h6v11h-6z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M22 0h2v15h-2zM11.406 4.406L9.97 5.813 19.188 15H22L11.406 4.406zM0 22h9v2H0z"
}));

export default SvgComponent;