function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 20,
  height: 22
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M7 3l3.5 3.5L14 3h-1l-2.5 2.5L8 3H7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M13.5 0a3.5 3.5 0 00-3.469 3h1.031c.234-1.14 1.23-2 2.438-2A2.5 2.5 0 0116 3.5V13c0 2.848-3 8-3 8h7s-3-5.152-3-8V3.5A3.5 3.5 0 0013.5 0zM1 17l4.5 4.5L10 17H9l-3.5 3.5L2 17H1zM3 0a3 3 0 013 3v10c0 1.49 2 4 2 4H3s2-2.51 2-4V3a2 2 0 10-4 0v4H0V3a3 3 0 013-3z"
}));

export default SvgComponent;