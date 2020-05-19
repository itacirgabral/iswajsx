function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 16,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M1 15h15v15H1z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M3 17h6v11H3z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M.88 7.969L.038 9.78 11.225 15h4.718L.881 7.969zM9 0h2v10H9z"
}));

export default SvgComponent;