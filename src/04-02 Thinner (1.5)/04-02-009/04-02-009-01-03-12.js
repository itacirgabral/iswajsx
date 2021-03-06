function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 11,
  height: 11
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M.658 6.496l3.536 3.536.707-.707-2.828-2.829L4.9 3.668l-.707-.707L.658 6.496zM7.818 4.817A4.006 4.006 0 014.99 6.01V4.994a3.009 3.009 0 003.005-3.005V0l.994-.022.022 2.01c0 1.105-.47 2.105-1.193 2.83z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9.232 6.231A5.99 5.99 0 014.99 8V6.983a4.99 4.99 0 004.994-4.994V0H11v1.989A5.99 5.99 0 019.232 6.23z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10 2a5 5 0 01-5 5V6a4 4 0 004-4V0h1v2z",
  fill: "#fff"
}));

export default SvgComponent;