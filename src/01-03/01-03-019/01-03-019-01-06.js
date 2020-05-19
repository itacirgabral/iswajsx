function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 18,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M3 17h15v13H3zM5 15H3V0h2v15zM13 6v9h-2V8H9v3H7V6h6z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8 11l-2.313 4H8l1.719-3L8 11zm-3.469 6L3 19.656C2.983 19.673 0 24 0 26c0 0 0 3 3 3v-2s-1 0-1-1v-.188c.047-.344.25-1.144 1-2.156L6.844 17H4.53z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4.531 17L3 19.656v4L6.844 17H4.53z",
  fill: "#fff"
}));

export default SvgComponent;