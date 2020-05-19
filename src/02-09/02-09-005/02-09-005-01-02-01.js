function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 21,
  height: 21
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 9v8h8L0 9zm1 2.438L5.563 16H1v-4.563z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M11.5 8c-2.623 0-5 1.062-6.719 2.781l-1.468 1.531 1.374 1.376 1.5-1.5A7.49 7.49 0 0111.5 10a7.49 7.49 0 015.313 2.188L19.593 15 21 13.594l-2.781-2.813A9.472 9.472 0 0011.5 8z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9 0h1v21H9V0zM13 0h1v21h-1V0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10 0h3v21h-3V0zM1 11.438V16h4.563L1 11.437z",
  fill: "#fff"
}));

export default SvgComponent;