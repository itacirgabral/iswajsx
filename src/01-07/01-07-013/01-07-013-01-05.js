function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 21,
  height: 26
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M6 13h15v13H6z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M8 15h6v9H8z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8 0v11h2V0H8zM1.625 4.625L.219 6.063 5.187 11H8L1.625 4.625z"
}));

export default SvgComponent;