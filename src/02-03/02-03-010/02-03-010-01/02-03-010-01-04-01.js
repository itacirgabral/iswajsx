function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 21,
  height: 16
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M19 0v14H2V1H0v15h21V0h-2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14 0v9H7V1H5v10h11V0h-2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16 0v11H5V1H2v13h17V0h-3z",
  fill: "#fff"
}));

export default SvgComponent;