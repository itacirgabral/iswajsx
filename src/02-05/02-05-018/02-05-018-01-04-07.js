function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 38,
  height: 20
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M31 9v2h-6V9h6zm-9 0v2h-9V9h9zM10 9v2H0V9h10z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9 0a3 3 0 013 3v8a4 4 0 004 4H7a4 4 0 004-4V3a2 2 0 00-4 0v4H6V3a3 3 0 013-3zM16 15l-4.5 4.5L7 15h9zM31 3v14l7-7-7-7zM20.5 0C22.433 0 24 1.343 24 3v8c0 4.418 1.79 8 4 8h-9c2.21 0 4-3.582 4-8V3c0-1.105-1.12-2-2.5-2S18 1.895 18 3h-1c0-1.657 1.567-3 3.5-3z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14 3l3.5 3.5L21 3h-7z"
}));

export default SvgComponent;