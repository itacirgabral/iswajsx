function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 23,
  height: 26
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M16 0l7 7H9l7-7zm0 1.438L11.437 6h9.126L16 1.437zM17 7v8a3 3 0 01-3 3 2.98 2.98 0 01-2-.781V22a4 4 0 01-4 4H7c-3.866 0-7-2.686-7-6h6c0 2.21.895 4 2 4a2 2 0 002-2v-9.563l3.281 3.282c.181.18.443.281.719.281a1 1 0 001-1V7h2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16 1.438L20.563 6h-9.125L16 1.437z",
  fill: "#fff"
}));

export default SvgComponent;