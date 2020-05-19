function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 20,
  height: 33
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M18 0v16c0 .828-.895 1.5-2 1.5-.748 0-1.407-.294-1.75-.75l-5.719-5.281A4.978 4.978 0 005 10a5 5 0 00-5 5v18h2V15c0-.828.895-1.5 2-1.5.748 0 1.407.294 1.75.75l5.719 5.281A4.978 4.978 0 0015 21a5 5 0 005-5V0h-2z"
}));

export default SvgComponent;