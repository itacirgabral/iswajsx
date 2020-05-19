function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 15,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 0h2v15H0zM12.594 4.406L2 15h2.813l9.218-9.188-1.437-1.406zM0 17h15v13H0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8 23.5a2.5 2.5 0 11-5 0 2.5 2.5 0 115 0z",
  fill: "#fff"
}));

export default SvgComponent;