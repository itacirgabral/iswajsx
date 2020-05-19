function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 15,
  height: 18
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 3h15v15H0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8 2v6H7V5H2v3H0v3h2v5h11v-2H7v-3h1v2h2v-2h1v2h2v-2h2V8h-2V2s0-1-1-1-1 1-1 1v6h-1V2s0-1-1-1-1 1-1 1z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 0s-2 0-2 2v6h1V2s0-1 1-1 1 1 1 1v6h1V2s0-2-2-2zm-2 11v3h4v-3h-1v2h-2v-2h-1z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9 0S7 0 7 2v6h1V2s0-1 1-1 1 1 1 1v6h1V2s0-2-2-2zM7 11v3h4v-3h-1v2H8v-2H7z"
}));

export default SvgComponent;