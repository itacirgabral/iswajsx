function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 7,
  height: 9
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M2 4h1v4h4v1H2V4z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3.5 0A3.5 3.5 0 017 3.5 6.708 6.708 0 016 7H4V5c1.105 0 2-.672 2-1.5A2.5 2.5 0 003.5 1H0V0h3.5z"
}));

export default SvgComponent;