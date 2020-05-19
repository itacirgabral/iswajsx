function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 30,
  height: 18
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M3 9h20v9H3z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M5 11h16v3H5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M28.25 7.938L24 12.188V15l5.656-5.656-1.406-1.406zM19.813 1.25L18 8h2.094l1.656-6.25-1.938-.5zM13 0h2v8h-2zM8.188 1.25l-1.938.5L7.906 8H10L8.187 1.25zM1.469 4.469L.062 5.875 2.188 8H5L1.469 4.469z"
}));

export default SvgComponent;