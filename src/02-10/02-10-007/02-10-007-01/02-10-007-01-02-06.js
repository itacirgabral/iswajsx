function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 10,
  height: 16
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M10 8.719l-2.5 2.5-2.5-2.5L5.719 8 7.5 9.781 9.281 8l.719.719zM8 6H6V4h2v2zm-2 9H4v-2h2v2zM6 3H4V1h2v2zM2 16H0v-2h2v2zM2 2H0V0h2v2z"
}));

export default SvgComponent;