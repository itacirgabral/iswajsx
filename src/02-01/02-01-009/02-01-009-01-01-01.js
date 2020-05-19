function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 21,
  height: 15
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M7 1v3H4v2h3v3H4v2h3v3h2v-3h3v3h2v-3h3V9h-3V6h3V4h-3V1h-2v3H9V1H7zm2 5h3v3H9V6z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M9 6h3v3H9z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 0h2v15H0zM19 0h2v15h-2z"
}));

export default SvgComponent;