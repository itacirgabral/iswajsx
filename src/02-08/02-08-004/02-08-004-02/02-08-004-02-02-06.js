function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 27,
  height: 41
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M2 0v16c0 .828.895 1.5 2 1.5.748 0 1.407-.294 1.75-.75l5.719-5.281A4.978 4.978 0 0115 10a5 5 0 015 5v9c0 3.283 4 9 4 9H14s4-5.717 4-9v-9c0-.828-.895-1.5-2-1.5-.748 0-1.407.294-1.75.75l-5.719 5.281A4.978 4.978 0 015 21a5 5 0 01-5-5V0h2zM27 33l-8 8-8-8h16zm-2.406 1H13.406L19 39.563 24.594 34z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M24.594 34L19 39.563 13.406 34h11.188z",
  fill: "#fff"
}));

export default SvgComponent;