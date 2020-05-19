function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 20,
  height: 27
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M6 0L0 6v21h12V6L6 0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6 2.813l-4 4V25h4V2.812z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M15.063 11.063l-1.438 1.406L17.188 16l-.594.594-.125.125L12 21.187V24l5.875-5.875L18 18l.594-.594L20 16l-4.938-4.938z"
}));

export default SvgComponent;