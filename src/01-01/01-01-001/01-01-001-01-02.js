function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 15,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M13 0h2v15h-2zM0 15h15v15H0z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M2 17h6v11H2z"
}));

export default SvgComponent;