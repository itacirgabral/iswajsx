function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 23,
  height: 24
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M8 9h15v15H8z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M10 11h11v11H10z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3 0v7h2V2h3v7h2V0H3zM1.719 5.156L0 6.156 8 20v-3.969L1.719 5.156z"
}));

export default SvgComponent;