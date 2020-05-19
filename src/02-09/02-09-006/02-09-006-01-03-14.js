function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 21,
  height: 38
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M12 0h-1v38h1V0zM5.5 1.5L0 7h2l3.5-3.5L9 7h2L5.5 1.5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M15 0h-3v38h3V0z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16 0h-1v38h1V0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6 7v5a3 3 0 003 3h12v3H10a5 5 0 01-5-5V7h1zM5.5 17.5L0 23h2l3.5-3.5L9 23h2l-5.5-5.5zM6 23v5a3 3 0 003 3h12v3H10a5 5 0 01-5-5v-6h1z"
}));

export default SvgComponent;