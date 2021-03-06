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
  d: "M3 15c-3 0-3 3-3 3v5h2v-3c0-1 1-1 1-1h4v-4H3zM13 0h1v13h-1zM10 2h1v11h-1zM7 4h1v9H7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M1.375 11.781l-.875.5L7 23.531v-2l-5.625-9.75z"
}));

export default SvgComponent;