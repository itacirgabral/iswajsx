function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 23,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 17h15v13H0z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M2 19h6v9H2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M13 3h2v12h-2zM10 0H8v15h2V0zM21.375 15.813L16 21.186V24l6.781-6.781-1.406-1.407z"
}));

export default SvgComponent;