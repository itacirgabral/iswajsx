function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 22,
  height: 21
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M4 6h15v15H4z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12.813 6L4 14.094v-2.875L9.625 6h3.188z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19 0c3 0 3 3 3 3v3c0 2-2.856 4.043-3 4V6h-1c1 0 1-1 1-1V4c0-1-1-1-1-1h-1c-1 0-2 1-2 1l-2.188 2H9.626l5-4.625L15 1c1-1 2-1 2-1h2zM4 11.219v2.875L3 15c-2 2 0 2 0 2h1v2H2c-2 0-2-2-2-2v-1c0-1 1-2 1-2l3-2.781z"
}));

export default SvgComponent;