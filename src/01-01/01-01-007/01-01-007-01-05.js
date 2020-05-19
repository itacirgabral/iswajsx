function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 15,
  height: 26
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 13h15v13H0zM7 0v7h2V2h4v9h2V0H7z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M2 15h6v9H2z"
}));

export default SvgComponent;