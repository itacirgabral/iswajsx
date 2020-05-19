function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 10,
  height: 16
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 7.281l2.5-2.5 2.5 2.5L4.281 8 2.5 6.219.719 8 0 7.281zM2 10h2v2H2v-2zm2-9h2v2H4V1zm0 12h2v2H4v-2zM8 0h2v2H8V0zm0 14h2v2H8v-2z"
}));

export default SvgComponent;