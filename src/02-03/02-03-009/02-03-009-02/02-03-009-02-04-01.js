function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 20,
  height: 26
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 0v26L20 6l-1.406-1.406L2 21.187V0H0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6 0v11.5l9.75-9.75L14.344.344 8 6.687V0H6z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2 0v21.188L18.594 4.593 15.75 1.75 6 11.5V0H2z",
  fill: "#fff"
}));

export default SvgComponent;