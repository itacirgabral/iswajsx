function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 16,
  height: 38
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M2 0v12.75A4.443 4.443 0 014.5 12a4.5 4.5 0 010 9c-.928 0-1.788-.27-2.5-.75V32a4 4 0 004 4c4.418 0 8-3.134 8-7h2c0 4.97-4.477 9-10 9a6 6 0 01-6-6V0h2zm2.5 14a2.5 2.5 0 100 5 2.5 2.5 0 000-5z"
}));

export default SvgComponent;