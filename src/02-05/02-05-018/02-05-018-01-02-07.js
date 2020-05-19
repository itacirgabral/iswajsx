function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 40,
  height: 20
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M2 9v2h21V9H2zm24 0v2h7V9h-7zM19 6h11L24.5.5 19 6zm2.408-.994L24.5 1.914l3.07 3.07-6.162.022zM33 17l7-7-7-7v14zm1-2.438V5.438L38.563 10 34 14.563z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M34 14.563L38.563 10 34 5.437v9.125zM21.408 5.006l6.162-.022-3.07-3.07-3.092 3.092z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M24 5v10c0 1.105-.672 2-1.5 2s-1.5-.895-1.5-2v-1h-5v1c0 2.21 2.015 4 4.5 4s4.5-1.79 4.5-4V5h-1zM0 17h11l-5.5-5.5L0 17zm2.408-.994L5.5 12.914l3.07 3.07-6.162.022z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2.408 16.006l6.162-.022-3.07-3.07-3.092 3.092z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 1v15a2 2 0 01-4 0H3c0 2.21 2.239 4 5 4s5-1.79 5-4V1h-1z"
}));

export default SvgComponent;