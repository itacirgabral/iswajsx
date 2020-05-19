function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 28,
  height: 31
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M21 0l7 7H14l7-7zm0 1.438L16.406 6h9.157L21 1.437zM22 7v8a3 3 0 01-3 3 2.98 2.98 0 01-2-.781V21a3 3 0 01-3 3 2.98 2.98 0 01-2-.781V27a4 4 0 01-4 4H7c-3.866 0-7-2.686-7-6h6c0 2.21.895 4 2 4a2 2 0 002-2v-8.563l3.281 3.282c.181.18.443.281.719.281a1 1 0 001-1v-8.563l3.281 3.282c.181.18.443.281.719.281a1 1 0 001-1V7h2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M21 1.438L25.563 6h-9.157L21 1.437z",
  fill: "#fff"
}));

export default SvgComponent;