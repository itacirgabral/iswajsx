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
  d: "M21 0h2v15h-2zM0 15h15v2H0zM15 3h2v12h-2zM10.063 7.219L8.624 8.625 15 15v-2.813L10.062 7.22z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5.094 11.844l-2.125 2.125L15 26v-4.25l-9.906-9.906z"
}));

export default SvgComponent;