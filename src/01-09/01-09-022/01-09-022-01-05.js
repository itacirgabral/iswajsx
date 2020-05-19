function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 22,
  height: 26
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 11h15v15H0z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M2 13h6v11H2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7 0v7h2V2h4v7h2V0H7zM17 14v2h3v3h-4v2h6v-7h-5z"
}));

export default SvgComponent;