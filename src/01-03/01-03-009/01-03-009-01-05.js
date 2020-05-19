function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 24,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M1 17h15v13H1z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M3 19h6v9H3z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M.88 7.969L.038 9.78 11.225 15h4.718L.881 7.969zM9 0h2v10H9zM22.375 15.813L17 21.186V24l6.781-6.781-1.406-1.407z"
}));

export default SvgComponent;