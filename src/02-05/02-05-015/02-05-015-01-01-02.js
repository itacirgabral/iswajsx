function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 29,
  height: 24
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M5.201 5.615L23.586 24 25 22.586 6.615 4.2 5.201 5.615zM11 15l-5.5 5.5L0 15h11z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10.9 0L1 9.9V0h9.9zM16 4C9.925 4 5 8.925 5 15h1C6 9.477 10.477 5 16 5h2V4h-2zM23 17l5.5-5.5L23 6v11z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 22c0-6.075 4.925-11 11-11v1c-5.523 0-10 4.477-10 10v2h-1v-2z"
}));

export default SvgComponent;