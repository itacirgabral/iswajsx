function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 24,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M9 17h15v13H9z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M11 19h6v9h-6z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5 11s-5 0-5 5h2s0-3 3-3h1s2.3-.01 2.875 2h2C10.586 13.544 9.58 11 6 11H5zM17 0h-2v15h2V0zM0 16c0 5 5 5 5 5h1c.788 0 1.44-.135 2-.344v-2.343C7.128 18.998 6 19 6 19H5c-3 0-3-3-3-3H0z"
}));

export default SvgComponent;