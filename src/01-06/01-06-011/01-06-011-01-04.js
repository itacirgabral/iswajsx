function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 23,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M3 17h15v13H3z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M5 19h11v9H5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16 0h2v15h-2zM10 5C7 5 7 8 7 8v2h2V8c0-1 1-1 1-1h1c1 0 1 1 1 1v7h2V8c0-2.803-2.532-2.988-2.875-3H10zM3 10c-3 0-3 3-3 3v3h2v-3c0-1 1-1 1-1h2c1 0 1 1 1 1v2h2v-2c0-3-3-3-3-3H3zM21.281 18.344L19 22.312v3.97l4-6.938-1.719-1z"
}));

export default SvgComponent;