function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 23,
  height: 10
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M2 4V0h1v4H2zM20.5 9l-2.594-4.469.875-.531L20.5 6.969 22.219 4l.875.531L20.5 9zM2.5 9L-.094 4.531.781 4 2.5 6.969 4.219 4l.875.531L2.5 9z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M20 4V0h1v4h-1zM9.5 6C6 6 6 10 6 10h2s0-2 1.5-2 1.5 2 4 2C17 10 17 6 17 6h-2s0 2-1.5 2-1.5-2-4-2z"
}));

export default SvgComponent;