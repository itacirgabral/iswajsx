function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 43,
  height: 39
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M21.5 0A8.5 8.5 0 0013 8.5a8.501 8.501 0 005 7.75V19h-3a7 7 0 00-7 7v13h2V26a5 5 0 015-5h13a5 5 0 015 5v13h2V26a7 7 0 00-7-7h-3v-2.75a8.501 8.501 0 005-7.75A8.5 8.5 0 0021.5 0zM14 26v13h3V26h-3zm12 0v13h3V26h-3z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 30h43v2H0v-2z"
}));

export default SvgComponent;