function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 10,
  height: 16
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M10 8.719l-2.5 2.5-2.5-2.5L5.719 8 7.5 9.781 9.281 8l.719.719zM2 0v2H0V0h2zm4 1v2H4V1h2zm0 12v2H4v-2h2zm-4 1v2H0v-2h2zM10 4.719l-2.5 2.5-2.5-2.5L5.719 4 7.5 5.781 9.281 4l.719.719z"
}));

export default SvgComponent;