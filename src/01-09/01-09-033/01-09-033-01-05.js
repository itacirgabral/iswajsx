function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 26,
  height: 19
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M11 6h15v13H11z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M13 8h6v9h-6z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5 0C1.3 0 .344 2.732.094 4.156l1.937.5C2.255 2.006 5 2 5 2h3c1.832 0 2.535 1.129 2.813 2h2.093C12.282.012 8 0 8 0H5zM2.031 14.344l-1.969.531C.613 18.995 5 19 5 19h5v-2H5c-2.453 0-2.887-1.925-2.969-2.656z"
}));

export default SvgComponent;