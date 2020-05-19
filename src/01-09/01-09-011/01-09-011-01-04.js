function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 22,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M6 15h8v15H6z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M7 16h6v13H7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3 15c-3 0-3 3-3 3v3h2v-3c0-1 1-1 1-1h1v-2H3zM10 0h1v13h-1zM7 2h1v11H7zM4 4h1v9H4zM20.375 18.813L15 24.188V27l6.781-6.781-1.406-1.407z"
}));

export default SvgComponent;