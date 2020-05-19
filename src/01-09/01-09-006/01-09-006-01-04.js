function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 23,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M15 15h8v15h-8z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M16 16h6v13h-6z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 15h13v2H0zM18 0h2v13h-2zM13 3l-1.813.875L15.657 13h2.218L13 3zM10 9l-1.438 1.406L11.188 13H14l-4-4z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4.406 11.156l-2.125 2.125L13 24v-4.25l-8.594-8.594z"
}));

export default SvgComponent;