function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 15,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 15h15v15H0z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M2 17h11v11H2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M13 0v15h2V0h-2zM9.5 21a2.5 2.5 0 100 5 2.5 2.5 0 000-5z"
}));

export default SvgComponent;