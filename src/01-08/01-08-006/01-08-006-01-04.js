function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 17,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M9 15h8v15H9z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M10 16h6v13h-6z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M15 0h2v13h-2zM4 15c-4 0-4 4-4 4v3h2v-3c0-1 1-1 1-1h4v-3H4zM9 3h2v10H9zM4.063 7.219L2.625 8.625 7 13h2v-.813L4.062 7.22z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4.219 18L7 22.813v-2L5.375 18H4.219z"
}));

export default SvgComponent;