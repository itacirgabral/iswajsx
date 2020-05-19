function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 25,
  height: 21
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M10 8h15v13H10z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M12 10h11v9H12z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5 3S0 3 0 8v3h3V8s0-2 2-2h7.594C12.066 4.604 10.848 3 8 3H5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6.5.188l-1.938.53L9 17.282v-7.75L6.5.187z"
}));

export default SvgComponent;