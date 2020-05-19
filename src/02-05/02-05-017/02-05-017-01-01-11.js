function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 38,
  height: 20
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M31 9v2H0V9h31z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M21 0a3 3 0 013 3v8a4 4 0 004 4h-9a4 4 0 004-4V3a2 2 0 00-4 0v4h-1V3a3 3 0 013-3zM28 15l-4.5 4.5L19 15h9zM31 3v14l7-7-7-7zM9 0a3 3 0 013 3v8a4 4 0 004 4H7a4 4 0 004-4V3a2 2 0 00-4 0v4H6V3a3 3 0 013-3zM16 15l-4.5 4.5L7 15h9z"
}));

export default SvgComponent;