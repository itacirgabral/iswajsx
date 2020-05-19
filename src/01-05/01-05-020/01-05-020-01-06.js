function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 20,
  height: 27
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M14 0l6 6v21H8V6l6-6z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M20 10v3H8v-3h12z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4.938 11.063l1.437 1.406L2.812 16l.594.594.125.125L8 21.187V24l-5.875-5.875L2 18l-.594-.594L0 16l4.938-4.938z"
}));

export default SvgComponent;