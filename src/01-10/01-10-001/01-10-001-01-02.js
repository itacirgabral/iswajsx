function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 15,
  height: 15
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 0h15v15H0z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M2 2h6v11H2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 7.5a3.5 3.5 0 11-7 0 3.5 3.5 0 117 0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M11 7.5a2.5 2.5 0 11-5 0 2.5 2.5 0 115 0z",
  fill: "#fff"
}));

export default SvgComponent;