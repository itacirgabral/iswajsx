function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 24,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M9 17h15v13H9z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M11 19h11v9H11z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M11 0H9v15h2V0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5 11c-5 0-5 5-5 5h2s0-3 3-3h1c1.832 0 2.535 1.129 2.813 2h2.062C10.586 13.544 9.58 11 6 11H5zM0 16s0 5 5 5h1c.788 0 1.44-.135 2-.344v-2.343C7.128 18.998 6 19 6 19H5s-3 0-3-3H0z"
}));

export default SvgComponent;