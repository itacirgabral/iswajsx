function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 22,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 17h15v13H0z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M2 19h6v9H2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M13 0h2v15h-2zM2.406 4.406L.97 5.813 10.188 15H13L2.406 4.406zM17 19v2h3v2h-4v2h6v-6h-5z"
}));

export default SvgComponent;