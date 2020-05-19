function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 7,
  height: 9
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M5 4H4v4H0v1h5V4z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3.5 0A3.5 3.5 0 000 3.5C0 4.784.377 5.978 1 7h2V5c-1.105 0-2-.672-2-1.5A2.5 2.5 0 013.5 1H7V0H3.5z"
}));

export default SvgComponent;